import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/krnc8kyjp.css';
import '../../css/f/f0fcqmbzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="krnc8kyjp"/><path class="f0fcqmbzu"/>`,
		"fallback": "pixel:comment-dots",
	});
}

export default Component;
