import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpi3gdb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpi3gdb4t"/>`,
		"fallback": "mdi:bell-cancel-outline",
	});
}

export default Component;
