import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/f/ftpkt8zyt.css';
import '../../css/o/oq4n5n2mn.css';
import '../../css/h/hbjm60bpx.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGc9QjKbht"><g class="rohhhzb0l"><path class="ftpkt8zyt"/><circle class="oq4n5n2mn"/><path class="hbjm60bpx"/></g></mask></defs><path mask="url(#SVGc9QjKbht)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:file-settings-one",
	});
}

export default Component;
