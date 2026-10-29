import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0iy8x-ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0iy8x-ew"/>`,
		"fallback": "withicons:circle-pause-solid",
	});
}

export default Component;
