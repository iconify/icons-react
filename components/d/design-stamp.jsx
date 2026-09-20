import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2smo5btm.css';
import '../../css/k/k52gxob7f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2smo5btm"/><path class="k52gxob7f"/>`,
		"fallback": "streamline-pixel:design-stamp",
	});
}

export default Component;
