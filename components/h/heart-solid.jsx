import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yck5jpncx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yck5jpncx"/>`,
		"fallback": "nrk:heart-solid",
	});
}

export default Component;
