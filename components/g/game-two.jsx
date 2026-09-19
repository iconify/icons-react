import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohtjlzb9o.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGWbHkneAU"><path class="ohtjlzb9o"/></mask></defs><path mask="url(#SVGWbHkneAU)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:game-two",
	});
}

export default Component;
