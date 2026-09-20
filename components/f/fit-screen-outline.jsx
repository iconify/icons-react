import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpes_5kab.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpes_5kab"/>`,
		"fallback": "lsicon:fit-screen-outline",
	});
}

export default Component;
