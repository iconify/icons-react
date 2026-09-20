import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-lgn07dz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-lgn07dz"/>`,
		"fallback": "qlementine-icons:go-last-16",
	});
}

export default Component;
