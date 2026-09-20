import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2uy8o19f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2uy8o19f"/>`,
		"fallback": "mingcute:base-station-line",
	});
}

export default Component;
