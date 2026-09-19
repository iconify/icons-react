import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4rxvqb0j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4rxvqb0j"/>`,
		"fallback": "cryptocurrency:dock",
	});
}

export default Component;
