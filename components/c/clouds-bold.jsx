import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewaos-x_y.css';
import '../../css/p/p2vfxjbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewaos-x_y"/><path class="p2vfxjbvc"/>`,
		"fallback": "solar:clouds-bold",
	});
}

export default Component;
