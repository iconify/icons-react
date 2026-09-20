import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k19r897in.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k19r897in"/>`,
		"fallback": "picon:album",
	});
}

export default Component;
