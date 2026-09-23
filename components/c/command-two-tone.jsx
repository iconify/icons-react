import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fecg7fbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fecg7fbwy"/>`,
		"fallback": "keyline-icons:command-two-tone",
	});
}

export default Component;
