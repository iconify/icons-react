import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo7c1d9kq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo7c1d9kq"/>`,
		"fallback": "f7:checkmark-square-fill",
	});
}

export default Component;
