import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aktw6zwky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aktw6zwky"/>`,
		"fallback": "andrsrxn:3d",
	});
}

export default Component;
