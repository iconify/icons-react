import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/f/f6q5qubpi.css';
import '../../css/z/zpwt154-d.css';
import '../../css/n/n9vszdu4b.css';
import '../../css/v/vqtid2bms.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGtcihVLhJ"><g class="aql7dnt-u"><path class="f6q5qubpi"/><path class="zpwt154-d"/><circle class="n9vszdu4b"/><path class="vqtid2bms"/></g></mask></defs><path mask="url(#SVGtcihVLhJ)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:image-files",
	});
}

export default Component;
