import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1barb3o.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc1barb3o"/>`,
		"fallback": "f7:camera-fill",
	});
}

export default Component;
