import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qst5700gr.css';
import '../../css/b/bcbzygbff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="qst5700gr"/><path class="bcbzygbff"/></g>`,
		"fallback": "proicons:checkmark-checked",
	});
}

export default Component;
