import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyop8zbfw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyop8zbfw"/>`,
		"fallback": "selfhst:hanko",
	});
}

export default Component;
