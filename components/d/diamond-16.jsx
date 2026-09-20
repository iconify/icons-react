import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyn_l9bao.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyn_l9bao"/>`,
		"fallback": "qlementine-icons:diamond-16",
	});
}

export default Component;
