import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uhdvo6bir.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uhdvo6bir"/>`,
		"fallback": "roentgen:burger",
	});
}

export default Component;
