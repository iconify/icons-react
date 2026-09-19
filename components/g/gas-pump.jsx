import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2sx3xd-j.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2sx3xd-j"/>`,
		"fallback": "fa7-solid:gas-pump",
	});
}

export default Component;
