import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ievlno-9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ievlno-9y"/>`,
		"fallback": "streamline-ultimate:equal-math-symbol-circle-bold",
	});
}

export default Component;
