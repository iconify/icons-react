import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyeh7w0zc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jyeh7w0zc"/>`,
		"fallback": "si:close-circle-fill",
	});
}

export default Component;
