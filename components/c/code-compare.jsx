import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4n0e7nyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p4n0e7nyj"/>`,
		"fallback": "griddy-icons:code-compare",
	});
}

export default Component;
