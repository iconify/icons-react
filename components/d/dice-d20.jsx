import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkq57kf6m.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hkq57kf6m"/>`,
		"fallback": "fa-solid:dice-d20",
	});
}

export default Component;
