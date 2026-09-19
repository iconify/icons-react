import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d83wn677s.css';
import '../../css/y/y4r4x_bib.css';
import '../../css/m/mb867oblv.css';
import '../../css/f/fbkd1nm7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d83wn677s"/><circle class="y4r4x_bib"/><path class="mb867oblv"/><path class="fbkd1nm7p"/></g>`,
		"fallback": "hugeicons:image-plus",
	});
}

export default Component;
