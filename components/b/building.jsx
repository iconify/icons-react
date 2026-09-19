import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlhh1586r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlhh1586r"/>`,
		"fallback": "at-icons:building",
	});
}

export default Component;
