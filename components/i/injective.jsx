import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrb6h1bny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrb6h1bny"/>`,
		"fallback": "token:injective",
	});
}

export default Component;
