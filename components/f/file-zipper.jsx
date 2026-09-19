import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdn237bry.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdn237bry"/>`,
		"fallback": "fa6-regular:file-zipper",
	});
}

export default Component;
