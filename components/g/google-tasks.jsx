import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khc1gzhjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khc1gzhjr"/>`,
		"fallback": "thesvg-color:google-tasks",
	});
}

export default Component;
