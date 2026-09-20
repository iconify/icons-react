import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c75-_gvco.css';
import '../../css/u/uqhik9b3f.css';
import '../../css/s/svf7bmovx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="c75-_gvco"/><path class="uqhik9b3f"/><circle class="svf7bmovx"/></g>`,
		"fallback": "solar:history-2-linear",
	});
}

export default Component;
