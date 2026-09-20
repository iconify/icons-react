import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i01g5y-bj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i01g5y-bj"/>`,
		"fallback": "subway:cercle-5",
	});
}

export default Component;
