import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb88lbest.css';

const viewBox = {"width":289,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb88lbest"/>`,
		"fallback": "ls:braceleft",
	});
}

export default Component;
