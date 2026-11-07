import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je1sviibk.css';
import '../../css/l/lj99_bbii.css';
import '../../css/e/e4t4l5b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="je1sviibk"/><path class="lj99_bbii"/><path class="e4t4l5b9d"/>`,
		"fallback": "solar:bedside-table-3-bold-duotone",
	});
}

export default Component;
