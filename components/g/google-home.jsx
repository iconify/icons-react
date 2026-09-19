import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r8_w7xraz.css';
import '../../css/v/v94de9bxg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r8_w7xraz"/><path class="v94de9bxg"/></g>`,
		"fallback": "iconoir:google-home",
	});
}

export default Component;
