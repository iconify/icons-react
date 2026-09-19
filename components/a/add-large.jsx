import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxwc_zbvo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxwc_zbvo"/>`,
		"fallback": "carbon:add-large",
	});
}

export default Component;
