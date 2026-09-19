import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ny63qj1dd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ny63qj1dd"/>`,
		"fallback": "iconoir:horizontal-split",
	});
}

export default Component;
