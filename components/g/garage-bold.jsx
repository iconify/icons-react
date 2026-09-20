import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvtmssb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jvtmssb7z"/>`,
		"fallback": "solar:garage-bold",
	});
}

export default Component;
