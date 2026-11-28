import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzsf0vb4b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzsf0vb4b"/>`,
		"fallback": "noviair:chalkboard",
	});
}

export default Component;
