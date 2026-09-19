import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nnvjrjbfl.css';
import '../../css/o/o7x01qbdk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nnvjrjbfl"/><path class="o7x01qbdk"/>`,
		"fallback": "ion:at",
	});
}

export default Component;
