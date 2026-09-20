import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t4m-lumvp.css';
import '../../css/h/hhmdz5h9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t4m-lumvp"/><path class="hhmdz5h9f"/></g>`,
		"fallback": "solar:home-add-linear",
	});
}

export default Component;
