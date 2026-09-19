import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1bn_vnxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1bn_vnxx"/>`,
		"fallback": "bx:bxs-shapes",
	});
}

export default Component;
