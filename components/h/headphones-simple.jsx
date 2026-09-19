import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc1s4iqke.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc1s4iqke"/>`,
		"fallback": "fa6-solid:headphones-simple",
	});
}

export default Component;
