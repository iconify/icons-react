import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa3gd9xnf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa3gd9xnf"/>`,
		"fallback": "dashicons:heading",
	});
}

export default Component;
