import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl4opnbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zl4opnbjh"/>`,
		"fallback": "griddy-icons:goat-filled",
	});
}

export default Component;
