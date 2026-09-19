import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wm02tab2i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm02tab2i"/>`,
		"fallback": "carbon:gateway-exclusive",
	});
}

export default Component;
