import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq36qjv9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq36qjv9p"/>`,
		"fallback": "bx:bxs-paint",
	});
}

export default Component;
