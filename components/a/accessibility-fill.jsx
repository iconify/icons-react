import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny6_5-aau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ny6_5-aau"/>`,
		"fallback": "keyline-icons:accessibility-fill",
	});
}

export default Component;
