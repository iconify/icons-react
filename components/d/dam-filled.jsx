import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dl8y44ure.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dl8y44ure"/>`,
		"fallback": "tdesign:dam-filled",
	});
}

export default Component;
