import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmj2tv-_r.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmj2tv-_r"/>`,
		"fallback": "dinkie-icons:black-cross-square-small",
	});
}

export default Component;
