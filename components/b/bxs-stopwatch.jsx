import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgv679b4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgv679b4w"/>`,
		"fallback": "bx:bxs-stopwatch",
	});
}

export default Component;
