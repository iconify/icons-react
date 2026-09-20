import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqa01_boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cqa01_boz"/>`,
		"fallback": "reicon:home-wifi-filled",
	});
}

export default Component;
