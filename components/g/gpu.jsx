import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uwwy2wbpf.css';
import '../../css/q/q6eelcchj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uwwy2wbpf"/><path class="q6eelcchj"/></g>`,
		"fallback": "hugeicons:gpu",
	});
}

export default Component;
