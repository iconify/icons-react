import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmuwlogjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmuwlogjt"/>`,
		"fallback": "noviair:flag-plus",
	});
}

export default Component;
