import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh8lsuzqg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh8lsuzqg"/>`,
		"fallback": "subway:box-1",
	});
}

export default Component;
