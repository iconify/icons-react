import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mc21mpble.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mc21mpble"/>`,
		"fallback": "game-icons:balloon-dog",
	});
}

export default Component;
