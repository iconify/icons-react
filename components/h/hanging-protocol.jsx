import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzul08b9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzul08b9k"/>`,
		"fallback": "carbon:hanging-protocol",
	});
}

export default Component;
