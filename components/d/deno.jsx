import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uonq2q-9z.css';
import '../../css/w/w-n1usl-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uonq2q-9z"/><path class="w-n1usl-o"/>`,
		"fallback": "lineicons:deno",
	});
}

export default Component;
