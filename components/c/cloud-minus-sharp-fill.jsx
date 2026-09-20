import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cf7mz5b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cf7mz5b2z"/>`,
		"fallback": "keyline-icons:cloud-minus-sharp-fill",
	});
}

export default Component;
