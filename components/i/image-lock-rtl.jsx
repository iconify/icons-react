import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fizxgs--e.css';
import '../../css/d/dkx9jnbvd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fizxgs--e"/><path class="dkx9jnbvd"/>`,
		"fallback": "ooui:image-lock-rtl",
	});
}

export default Component;
