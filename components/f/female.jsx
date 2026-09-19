import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f--u3xscy.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f--u3xscy"/>`,
		"fallback": "fa-solid:female",
	});
}

export default Component;
