import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/igs6o1bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="igs6o1bpq"/>`,
		"fallback": "simple-icons:gsap",
	});
}

export default Component;
