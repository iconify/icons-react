import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n__6aluxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b n__6aluxi"/>`,
		"fallback": "bxl:dot-env",
	});
}

export default Component;
