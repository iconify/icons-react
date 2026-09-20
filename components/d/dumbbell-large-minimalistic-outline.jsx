import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb1iv7qez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zb1iv7qez"/>`,
		"fallback": "solar:dumbbell-large-minimalistic-outline",
	});
}

export default Component;
