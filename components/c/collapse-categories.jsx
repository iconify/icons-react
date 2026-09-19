import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf66svvni.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xf66svvni"/>`,
		"fallback": "carbon:collapse-categories",
	});
}

export default Component;
