import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pis88xbuv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pis88xbuv"/>`,
		"fallback": "streamline:flip-vertical-circle-1",
	});
}

export default Component;
