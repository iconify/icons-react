import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_-acu8zc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_-acu8zc"/>`,
		"fallback": "la:external-link-alt",
	});
}

export default Component;
