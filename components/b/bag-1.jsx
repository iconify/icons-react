import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slqkfdlsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slqkfdlsw"/>`,
		"fallback": "circum:bag-1",
	});
}

export default Component;
