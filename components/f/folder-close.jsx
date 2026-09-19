import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz7sa-bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz7sa-bbk"/>`,
		"fallback": "iconamoon:folder-close",
	});
}

export default Component;
