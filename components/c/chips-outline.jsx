import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qr2gxdbmz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qr2gxdbmz"/>`,
		"fallback": "lsicon:chips-outline",
	});
}

export default Component;
