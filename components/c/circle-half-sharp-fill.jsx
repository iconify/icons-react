import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es1__4bst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="es1__4bst"/>`,
		"fallback": "keyline-icons:circle-half-sharp-fill",
	});
}

export default Component;
