import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsl7u1bsc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsl7u1bsc"/>`,
		"fallback": "fa6-solid:handshake-angle",
	});
}

export default Component;
