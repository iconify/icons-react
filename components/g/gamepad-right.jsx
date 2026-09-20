import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-cfe4r_z.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-cfe4r_z"/>`,
		"fallback": "memory:gamepad-right",
	});
}

export default Component;
