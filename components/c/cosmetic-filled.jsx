import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0ac84bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0ac84bly"/>`,
		"fallback": "reicon:cosmetic-filled",
	});
}

export default Component;
