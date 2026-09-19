import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftn7tacln.css';
import '../../css/a/am_yeab8m.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftn7tacln"/><path class="am_yeab8m"/>`,
		"fallback": "carbon:face-activated-add",
	});
}

export default Component;
