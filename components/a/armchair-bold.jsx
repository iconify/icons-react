import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/conyuxbxt.css';
import '../../css/v/vlg3w9b6x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="conyuxbxt"/><path class="vlg3w9b6x"/>`,
		"fallback": "solar:armchair-bold",
	});
}

export default Component;
