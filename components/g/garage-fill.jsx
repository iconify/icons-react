import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8bb0e_4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y8bb0e_4w"/>`,
		"fallback": "si:garage-fill",
	});
}

export default Component;
