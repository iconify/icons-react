import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugbis8cfl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugbis8cfl"/>`,
		"fallback": "pinhead:hot-dog",
	});
}

export default Component;
