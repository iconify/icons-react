import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9fq9psqe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9fq9psqe"/>`,
		"fallback": "noviair-light:clock-9",
	});
}

export default Component;
