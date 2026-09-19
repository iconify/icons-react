import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rw477rt8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rw477rt8a"/>`,
		"fallback": "bx:bx-code",
	});
}

export default Component;
