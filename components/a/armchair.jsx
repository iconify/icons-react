import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsgo37b-k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsgo37b-k"/>`,
		"fallback": "picon:armchair",
	});
}

export default Component;
