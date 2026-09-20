import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvdfu_mpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fvdfu_mpf"/>`,
		"fallback": "keyline-icons:circle-pause-fill",
	});
}

export default Component;
