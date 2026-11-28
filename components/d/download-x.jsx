import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k6p5qprxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k6p5qprxn"/>`,
		"fallback": "noviair:download-x",
	});
}

export default Component;
