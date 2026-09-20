import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6che1bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6che1bpz"/>`,
		"fallback": "ri:artboard-2-line",
	});
}

export default Component;
