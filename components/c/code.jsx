import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jp5oe00ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jp5oe00ij"/>`,
		"fallback": "majesticons:code",
	});
}

export default Component;
