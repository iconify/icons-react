import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmi06xfby.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmi06xfby"/>`,
		"fallback": "system-uicons:backspace",
	});
}

export default Component;
