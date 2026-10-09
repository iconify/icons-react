import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m77m-bb1r.css';
import '../../css/f/f5bqv3-2b.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m77m-bb1r"/><path class="f5bqv3-2b"/><path class="py4nxfbnh"/>`,
		"fallback": "energy-icons:cloud-check-48",
	});
}

export default Component;
