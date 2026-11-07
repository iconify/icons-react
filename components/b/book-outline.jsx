import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0gvw96fa.css';
import '../../css/h/hw9ee6laf.css';
import '../../css/a/aitp4sbms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0gvw96fa"/><path class="hw9ee6laf"/><path clip-rule="evenodd" class="aitp4sbms"/>`,
		"fallback": "solar:book-outline",
	});
}

export default Component;
