import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njdwvrnbl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njdwvrnbl"/>`,
		"fallback": "bx:bxs-bolt-circle",
	});
}

export default Component;
