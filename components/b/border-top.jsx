import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guhg6-y-d.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guhg6-y-d"/>`,
		"fallback": "zmdi:border-top",
	});
}

export default Component;
