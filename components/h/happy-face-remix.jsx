import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abvwb5blb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abvwb5blb"/>`,
		"fallback": "streamline:happy-face-remix",
	});
}

export default Component;
