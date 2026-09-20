import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj8r4gbby.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj8r4gbby"/>`,
		"fallback": "roentgen:bag",
	});
}

export default Component;
