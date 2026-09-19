import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy9xnq4db.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy9xnq4db"/>`,
		"fallback": "carbon:dependency",
	});
}

export default Component;
