import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow7wuyz2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow7wuyz2q"/>`,
		"fallback": "ion:android-favorite-outline",
	});
}

export default Component;
