import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9975k8sf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9975k8sf"/>`,
		"fallback": "garden:box-3d-fill-16",
	});
}

export default Component;
