import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5k8btu8v.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5k8btu8v"/>`,
		"fallback": "fa7-regular:heart",
	});
}

export default Component;
