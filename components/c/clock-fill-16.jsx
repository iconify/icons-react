import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ne6lb_m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3ne6lb_m"/>`,
		"fallback": "octicon:clock-fill-16",
	});
}

export default Component;
