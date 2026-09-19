import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_-7mtb_u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_-7mtb_u"/>`,
		"fallback": "carbon:gateway",
	});
}

export default Component;
