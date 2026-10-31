import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wtytz56ta.css';
import '../../css/q/qc5bgzbyk.css';
import '../../css/c/cvae2cipx.css';
import '../../css/w/w125fbeyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wtytz56ta"/><path class="qc5bgzbyk"/><path class="cvae2cipx"/><path class="w125fbeyb"/></g>`,
		"fallback": "withicons-retro:citrus",
	});
}

export default Component;
