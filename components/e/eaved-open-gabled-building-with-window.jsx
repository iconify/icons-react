import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj3_jnb8x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cj3_jnb8x"/>`,
		"fallback": "pinhead:eaved-open-gabled-building-with-window",
	});
}

export default Component;
