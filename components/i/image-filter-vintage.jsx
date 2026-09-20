import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oncd8qu5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oncd8qu5d"/>`,
		"fallback": "mdi:image-filter-vintage",
	});
}

export default Component;
