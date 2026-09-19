import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbm61rb_z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbm61rb_z"/>`,
		"fallback": "ion:battery-empty",
	});
}

export default Component;
