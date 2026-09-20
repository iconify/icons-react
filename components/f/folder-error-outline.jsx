import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pico9db3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pico9db3k"/>`,
		"fallback": "solar:folder-error-outline",
	});
}

export default Component;
