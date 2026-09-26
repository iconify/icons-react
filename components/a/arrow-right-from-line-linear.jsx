import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m8cf4vb5m.css';
import '../../css/y/ymvg5pbqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m8cf4vb5m"/><path class="ymvg5pbqm"/></g>`,
		"fallback": "solar:arrow-right-from-line-linear",
	});
}

export default Component;
