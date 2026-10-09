import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4447fbqf.css';
import '../../css/v/vqj7n5bos.css';
import '../../css/m/m7ecu8bwk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4447fbqf"/><path class="vqj7n5bos"/><path class="m7ecu8bwk"/>`,
		"fallback": "energy-icons:esg-48-bold",
	});
}

export default Component;
