import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qe71zysrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qe71zysrs"/>`,
		"fallback": "humbleicons:cloud-sun",
	});
}

export default Component;
