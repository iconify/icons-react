import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnss0fb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fnss0fb8e"/>`,
		"fallback": "si:expand-less-alt-fill",
	});
}

export default Component;
