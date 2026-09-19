import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw54uz_0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw54uz_0i"/>`,
		"fallback": "cib:elastic-stack",
	});
}

export default Component;
