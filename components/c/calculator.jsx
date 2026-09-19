import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kq0w_mbfl.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kq0w_mbfl"/>`,
		"fallback": "fontisto:calculator",
	});
}

export default Component;
