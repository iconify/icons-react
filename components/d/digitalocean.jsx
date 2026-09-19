import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h326ij1xk.css';
import '../../css/c/cugpv4b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h326ij1xk"/><path class="cugpv4b-s"/>`,
		"fallback": "bxl:digitalocean",
	});
}

export default Component;
