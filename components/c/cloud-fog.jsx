import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfqcq4bcr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfqcq4bcr"/>`,
		"fallback": "bi:cloud-fog",
	});
}

export default Component;
