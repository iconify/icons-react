import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-g__d1hd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-g__d1hd"/>`,
		"fallback": "fa-solid:glass-martini",
	});
}

export default Component;
