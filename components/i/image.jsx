import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi8rvybjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi8rvybjr"/>`,
		"fallback": "ix:image",
	});
}

export default Component;
