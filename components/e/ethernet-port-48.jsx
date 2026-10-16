import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3d17v-0n.css';
import '../../css/o/ok69a315p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3d17v-0n"/><path class="ok69a315p"/>`,
		"fallback": "energy-icons:ethernet-port-48",
	});
}

export default Component;
