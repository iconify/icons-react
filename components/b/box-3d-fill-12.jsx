import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlvssrboe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlvssrboe"/>`,
		"fallback": "garden:box-3d-fill-12",
	});
}

export default Component;
