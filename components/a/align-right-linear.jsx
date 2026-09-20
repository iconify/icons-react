import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s_gjrqbti.css';
import '../../css/q/qblnn4bzv.css';
import '../../css/j/j6ohuicfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s_gjrqbti"/><path class="qblnn4bzv"/><path class="j6ohuicfp"/></g>`,
		"fallback": "solar:align-right-linear",
	});
}

export default Component;
