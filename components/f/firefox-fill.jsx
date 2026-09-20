import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx45nfbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wx45nfbbz"/>`,
		"fallback": "mingcute:firefox-fill",
	});
}

export default Component;
