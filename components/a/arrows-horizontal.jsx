import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk05hr1jb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk05hr1jb"/>`,
		"fallback": "carbon:arrows-horizontal",
	});
}

export default Component;
