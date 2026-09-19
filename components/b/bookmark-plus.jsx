import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbrtfx9pu.css';
import '../../css/s/s9jq5ybcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbrtfx9pu"/><path class="s9jq5ybcb"/>`,
		"fallback": "boxicons:bookmark-plus",
	});
}

export default Component;
