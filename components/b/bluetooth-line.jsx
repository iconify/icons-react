import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf6lz4lbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cf6lz4lbg"/>`,
		"fallback": "si:bluetooth-line",
	});
}

export default Component;
