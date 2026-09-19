import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb_ud0ubr.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb_ud0ubr"/>`,
		"fallback": "el:align-center",
	});
}

export default Component;
