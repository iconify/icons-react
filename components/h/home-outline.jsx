import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fpavm-beg.css';
import '../../css/p/pfluh_2pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fpavm-beg"/><path clip-rule="evenodd" class="pfluh_2pb"/>`,
		"fallback": "solar:home-outline",
	});
}

export default Component;
