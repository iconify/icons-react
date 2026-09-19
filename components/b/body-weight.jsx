import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/terkfac1d.css';
import '../../css/k/kd3ah3bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="terkfac1d"/><path class="kd3ah3bgx"/></g>`,
		"fallback": "hugeicons:body-weight",
	});
}

export default Component;
