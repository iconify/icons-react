import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fna3zcc3l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fna3zcc3l"/>`,
		"fallback": "withicons:folder-minus-solid",
	});
}

export default Component;
