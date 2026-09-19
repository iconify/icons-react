import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5z1hnb4q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5z1hnb4q"/>`,
		"fallback": "ion:android-create",
	});
}

export default Component;
