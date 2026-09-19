import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhf4zz28w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhf4zz28w"/>`,
		"fallback": "ion:android-list",
	});
}

export default Component;
