import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekx47qnmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekx47qnmh"/>`,
		"fallback": "streamline-ultimate:gas-f-bold",
	});
}

export default Component;
