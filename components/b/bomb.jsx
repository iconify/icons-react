import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn9u4nb1b.css';
import '../../css/r/r_rs3to2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn9u4nb1b"/><path class="r_rs3to2i"/>`,
		"fallback": "boxicons:bomb",
	});
}

export default Component;
