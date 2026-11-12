import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a7i7dpd8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a7i7dpd8o"/>`,
		"fallback": "selfhst:diyhue-light",
	});
}

export default Component;
