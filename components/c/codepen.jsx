import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk3dtpmsm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk3dtpmsm"/>`,
		"fallback": "la:codepen",
	});
}

export default Component;
