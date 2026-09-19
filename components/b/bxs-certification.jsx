import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apy7cbb7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apy7cbb7m"/>`,
		"fallback": "bx:bxs-certification",
	});
}

export default Component;
