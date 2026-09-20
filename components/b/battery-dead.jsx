import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/ajvnr0jez.css';
import '../../css/z/z0v2qxtbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ajvnr0jez"/><path class="z0v2qxtbl"/></g>`,
		"fallback": "mage:battery-dead",
	});
}

export default Component;
