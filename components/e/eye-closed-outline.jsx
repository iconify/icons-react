import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f31h5zbgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f31h5zbgz"/>`,
		"fallback": "solar:eye-closed-outline",
	});
}

export default Component;
