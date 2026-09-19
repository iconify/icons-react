import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7_z7-b2d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7_z7-b2d"/>`,
		"fallback": "dashicons:embed-photo",
	});
}

export default Component;
