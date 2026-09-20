import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffuts4bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ffuts4bae"/>`,
		"fallback": "reicon:arrow-down-right-square-filled",
	});
}

export default Component;
