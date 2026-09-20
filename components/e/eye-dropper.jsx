import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6njgfb9r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6njgfb9r"/>`,
		"fallback": "ix:eye-dropper",
	});
}

export default Component;
