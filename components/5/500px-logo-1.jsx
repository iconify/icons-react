import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-qz-097d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-qz-097d"/>`,
		"fallback": "streamline-logos:500px-logo-1",
	});
}

export default Component;
