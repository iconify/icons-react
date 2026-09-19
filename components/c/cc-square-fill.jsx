import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x61k8684r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x61k8684r"/>`,
		"fallback": "bi:cc-square-fill",
	});
}

export default Component;
