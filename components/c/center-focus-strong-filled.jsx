import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w33y4mbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w33y4mbzr"/>`,
		"fallback": "tdesign:center-focus-strong-filled",
	});
}

export default Component;
