import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fq71m7b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fq71m7b9r"/>`,
		"fallback": "simple-icons:allocine",
	});
}

export default Component;
