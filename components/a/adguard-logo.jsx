import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ljloo63wj.css';
import '../../css/r/ro7agmb9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ljloo63wj"/><path class="ro7agmb9m"/></g>`,
		"fallback": "streamline-ultimate:adguard-logo",
	});
}

export default Component;
