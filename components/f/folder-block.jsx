import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/m/msv6_bc6s.css';
import '../../css/p/paar3ebuf.css';
import '../../css/h/h-63f3bbk.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTbDb9brA"><g class="s9cl3zbei"><path class="msv6_bc6s"/><circle class="paar3ebuf"/><path class="h-63f3bbk"/></g></mask></defs><path mask="url(#SVGTbDb9brA)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:folder-block",
	});
}

export default Component;
