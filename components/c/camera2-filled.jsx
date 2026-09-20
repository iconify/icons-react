import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c1dkfib5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c1dkfib5p"/>`,
		"fallback": "reicon:camera2-filled",
	});
}

export default Component;
