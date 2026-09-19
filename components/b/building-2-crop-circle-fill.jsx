import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv71dh3kj.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv71dh3kj"/>`,
		"fallback": "f7:building-2-crop-circle-fill",
	});
}

export default Component;
