import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6audjk_m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6audjk_m"/>`,
		"fallback": "cib:circleci",
	});
}

export default Component;
