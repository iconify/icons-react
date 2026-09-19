import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmhv16-fi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmhv16-fi"/>`,
		"fallback": "dashicons:archive",
	});
}

export default Component;
