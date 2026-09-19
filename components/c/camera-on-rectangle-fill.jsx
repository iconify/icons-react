import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q17hu-xfx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q17hu-xfx"/>`,
		"fallback": "f7:camera-on-rectangle-fill",
	});
}

export default Component;
