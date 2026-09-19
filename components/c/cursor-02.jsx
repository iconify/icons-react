import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zta7qc5xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zta7qc5xb"/>`,
		"fallback": "hugeicons:cursor-02",
	});
}

export default Component;
