import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xdiltt19v.css';
import '../../css/r/rvji97b-y.css';
import '../../css/h/hsuwmebtl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xdiltt19v"/><path class="rvji97b-y"/><path class="hsuwmebtl"/>`,
		"fallback": "energy-icons:analytics-20-bold",
	});
}

export default Component;
