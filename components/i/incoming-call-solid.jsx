import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2prshb_i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l2prshb_i"/>`,
		"fallback": "streamline:incoming-call-solid",
	});
}

export default Component;
