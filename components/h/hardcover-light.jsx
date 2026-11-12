import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epx4oac-v.css';
import '../../css/k/k4v90z5go.css';
import '../../css/h/hv1gm7eyn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epx4oac-v"/><path class="k4v90z5go"/><path class="hv1gm7eyn"/>`,
		"fallback": "selfhst:hardcover-light",
	});
}

export default Component;
