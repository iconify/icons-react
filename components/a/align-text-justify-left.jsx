import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj8myni9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fj8myni9i"/>`,
		"fallback": "griddy-icons:align-text-justify-left",
	});
}

export default Component;
