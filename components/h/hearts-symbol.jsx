import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz2eh4s9q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz2eh4s9q"/>`,
		"fallback": "streamline:hearts-symbol",
	});
}

export default Component;
