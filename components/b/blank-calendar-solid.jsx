import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kp4tieq8b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kp4tieq8b"/>`,
		"fallback": "streamline:blank-calendar-solid",
	});
}

export default Component;
