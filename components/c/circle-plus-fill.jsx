import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9y182zmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o9y182zmo"/>`,
		"fallback": "keyline-icons:circle-plus-fill",
	});
}

export default Component;
