import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm4zn8bfo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm4zn8bfo"/>`,
		"fallback": "selfhst:eternal-vows-light",
	});
}

export default Component;
