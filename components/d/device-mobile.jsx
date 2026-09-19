import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvx11z1dq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bvx11z1dq"/>`,
		"fallback": "heroicons-solid:device-mobile",
	});
}

export default Component;
