import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f71pecfek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f71pecfek"/>`,
		"fallback": "keyline-icons:file-audio",
	});
}

export default Component;
