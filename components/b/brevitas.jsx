import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5c-3sjfs.css';

const viewBox = {"width":240,"height":240};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5c-3sjfs"/>`,
		"fallback": "thesvg-color:brevitas",
	});
}

export default Component;
