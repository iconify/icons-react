import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n4ekx3imr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n4ekx3imr"/>`,
		"fallback": "streamline-block:entertainment-newspaper",
	});
}

export default Component;
