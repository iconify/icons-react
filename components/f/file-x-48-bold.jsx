import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdos38jip.css';
import '../../css/r/r7ul0pb7v.css';
import '../../css/h/h_6x60xma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdos38jip"/><path class="r7ul0pb7v"/><path class="h_6x60xma"/>`,
		"fallback": "energy-icons:file-x-48-bold",
	});
}

export default Component;
