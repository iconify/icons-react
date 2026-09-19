import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ku-6f_b2q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ku-6f_b2q"/>`,
		"fallback": "ion:android-done",
	});
}

export default Component;
