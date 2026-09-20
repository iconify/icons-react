import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kl9i0ubuo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kl9i0ubuo"/>`,
		"fallback": "mdi:circle-slice-7",
	});
}

export default Component;
