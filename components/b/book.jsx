import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf1lh5gdv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf1lh5gdv"/>`,
		"fallback": "roentgen:book",
	});
}

export default Component;
