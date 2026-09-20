import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdp9ijb-t.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdp9ijb-t"/>`,
		"fallback": "picon:badminton",
	});
}

export default Component;
