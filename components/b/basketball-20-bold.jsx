import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0oa-qzdz.css';
import '../../css/x/x95x3sohk.css';
import '../../css/l/l9j64mb6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0oa-qzdz"/><path class="x95x3sohk"/><path class="l9j64mb6u"/>`,
		"fallback": "energy-icons:basketball-20-bold",
	});
}

export default Component;
