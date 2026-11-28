import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrswrcl3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrswrcl3h"/>`,
		"fallback": "noviair-light:archive-check",
	});
}

export default Component;
