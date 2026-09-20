import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8u0u259p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8u0u259p"/>`,
		"fallback": "tdesign:folder-open-1-filled",
	});
}

export default Component;
