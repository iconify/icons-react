import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc6_jgsyo.css';
import '../../css/t/tc5lk5bgj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc6_jgsyo"/><path class="tc5lk5bgj"/>`,
		"fallback": "teenyicons:bed-single-solid",
	});
}

export default Component;
