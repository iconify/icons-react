import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-hd3s68u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-hd3s68u"/>`,
		"fallback": "ion:checkmark-done-circle",
	});
}

export default Component;
