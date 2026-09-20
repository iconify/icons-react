import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7knmwi9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7knmwi9r"/>`,
		"fallback": "tabler:arrow-right-tail",
	});
}

export default Component;
