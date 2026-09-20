import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq5kcq0eh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cq5kcq0eh"/>`,
		"fallback": "streamline-freehand:discount-percent-thin",
	});
}

export default Component;
