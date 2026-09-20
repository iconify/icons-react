import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omueycc4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omueycc4c"/>`,
		"fallback": "nrk:backward-expressive",
	});
}

export default Component;
