import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z4crjtbwv.css';
import '../../css/u/uix8tab0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z4crjtbwv"/><path class="uix8tab0t"/></g>`,
		"fallback": "solar:folders-line-duotone",
	});
}

export default Component;
