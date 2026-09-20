import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hmy77ob3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hmy77ob3d"/>`,
		"fallback": "mi:cloud-download",
	});
}

export default Component;
