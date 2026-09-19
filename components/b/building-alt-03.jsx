import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fu4velb3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fu4velb3r"/>`,
		"fallback": "griddy-icons:building-alt-03",
	});
}

export default Component;
