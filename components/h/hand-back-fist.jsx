import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve5wmsbbq.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve5wmsbbq"/>`,
		"fallback": "fa7-solid:hand-back-fist",
	});
}

export default Component;
