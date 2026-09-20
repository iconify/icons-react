import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drsxbb9iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drsxbb9iy"/>`,
		"fallback": "tabler:circle-letter-l-filled",
	});
}

export default Component;
