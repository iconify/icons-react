import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jky5v_bzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jky5v_bzw"/>`,
		"fallback": "octicon:cloud-offline-16",
	});
}

export default Component;
