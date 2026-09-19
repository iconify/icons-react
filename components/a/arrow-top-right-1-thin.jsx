import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjt-f13vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjt-f13vz"/>`,
		"fallback": "iconamoon:arrow-top-right-1-thin",
	});
}

export default Component;
