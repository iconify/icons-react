import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztme5hbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztme5hbiy"/>`,
		"fallback": "hugeicons:folder-music",
	});
}

export default Component;
