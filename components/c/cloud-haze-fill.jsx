import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x33k3_bas.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x33k3_bas"/>`,
		"fallback": "bi:cloud-haze-fill",
	});
}

export default Component;
