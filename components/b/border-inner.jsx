import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px063k46p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px063k46p"/>`,
		"fallback": "uit:border-inner",
	});
}

export default Component;
