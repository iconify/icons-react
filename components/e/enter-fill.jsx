import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf3bt0b5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zf3bt0b5j"/>`,
		"fallback": "iconamoon:enter-fill",
	});
}

export default Component;
