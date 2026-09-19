import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu0-ifbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu0-ifbnz"/>`,
		"fallback": "iconoir:clutery",
	});
}

export default Component;
