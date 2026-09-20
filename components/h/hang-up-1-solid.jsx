import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i3kl4ieus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i3kl4ieus"/>`,
		"fallback": "streamline:hang-up-1-solid",
	});
}

export default Component;
