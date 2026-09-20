import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grd3ttq0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grd3ttq0e"/>`,
		"fallback": "uil:head-side-cough",
	});
}

export default Component;
