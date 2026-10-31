import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fsy5oy3nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fsy5oy3nc"/>`,
		"fallback": "withicons:accessibility-gloss",
	});
}

export default Component;
