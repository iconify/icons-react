import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gu8duj-kd.css';
import '../../css/h/hcbbnl92k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gu8duj-kd"/><path class="hcbbnl92k"/>`,
		"fallback": "boxicons:arrow-in-down-left-stroke-square",
	});
}

export default Component;
