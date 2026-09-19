import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-n4i5b7x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-n4i5b7x"/>`,
		"fallback": "garden:check-sm-fill-16",
	});
}

export default Component;
