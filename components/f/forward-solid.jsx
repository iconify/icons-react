import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfn07p5qj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfn07p5qj"/>`,
		"fallback": "basil:forward-solid",
	});
}

export default Component;
