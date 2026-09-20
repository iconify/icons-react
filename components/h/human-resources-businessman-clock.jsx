import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kyd7epibs.css';
import '../../css/o/o5xyf-jdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kyd7epibs"/><path class="o5xyf-jdx"/></g>`,
		"fallback": "streamline-ultimate:human-resources-businessman-clock",
	});
}

export default Component;
