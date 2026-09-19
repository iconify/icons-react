import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/suwwvuq3n.css';

const viewBox = {"width":944,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="suwwvuq3n"/>`,
		"fallback": "fontelico:ie",
	});
}

export default Component;
