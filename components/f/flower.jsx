import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdi43l57p.css';

const viewBox = {"width":416,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdi43l57p"/>`,
		"fallback": "zmdi:flower",
	});
}

export default Component;
