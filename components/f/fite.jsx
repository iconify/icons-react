import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjjng2bkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjjng2bkl"/>`,
		"fallback": "simple-icons:fite",
	});
}

export default Component;
