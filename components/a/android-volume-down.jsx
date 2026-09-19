import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqw0eob9l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqw0eob9l"/>`,
		"fallback": "ion:android-volume-down",
	});
}

export default Component;
