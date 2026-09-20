import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hkdfvacrr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hkdfvacrr"/>`,
		"fallback": "streamline-color:arrow-cursor-2-flat",
	});
}

export default Component;
