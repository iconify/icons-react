import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snw6p3bpz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snw6p3bpz"/>`,
		"fallback": "reicon:black-hole2-filled",
	});
}

export default Component;
