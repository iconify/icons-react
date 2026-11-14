import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wht68ernk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wht68ernk"/>`,
		"fallback": "hugeicons:folder-add",
	});
}

export default Component;
