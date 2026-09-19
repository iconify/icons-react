import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qzyiyj5jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qzyiyj5jk"/>`,
		"fallback": "iconamoon:folder-image-fill",
	});
}

export default Component;
