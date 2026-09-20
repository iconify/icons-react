import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb3091zsh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb3091zsh"/>`,
		"fallback": "la:fire",
	});
}

export default Component;
