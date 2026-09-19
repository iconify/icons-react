import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj98ueone.css';
import '../../css/t/t95d9j63b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj98ueone"/><path class="t95d9j63b"/>`,
		"fallback": "bx:bx-left-down-arrow-circle",
	});
}

export default Component;
