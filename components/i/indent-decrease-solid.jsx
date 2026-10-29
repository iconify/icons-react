import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyzcrx07p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyzcrx07p"/>`,
		"fallback": "withicons:indent-decrease-solid",
	});
}

export default Component;
