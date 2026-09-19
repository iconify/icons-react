import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cld7pcy1f.css';
import '../../css/o/o6gf0s8fn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cld7pcy1f"/><path class="o6gf0s8fn"/></g>`,
		"fallback": "hugeicons:bitcoin-smartphone-02",
	});
}

export default Component;
