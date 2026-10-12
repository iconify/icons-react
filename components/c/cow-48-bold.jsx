import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9emokusn.css';
import '../../css/m/mpu2txpdl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9emokusn"/><path class="mpu2txpdl"/>`,
		"fallback": "energy-icons:cow-48-bold",
	});
}

export default Component;
