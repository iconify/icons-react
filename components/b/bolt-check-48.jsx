import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em933ob1r.css';
import '../../css/p/py4nxfbnh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em933ob1r"/><path class="py4nxfbnh"/>`,
		"fallback": "energy-icons:bolt-check-48",
	});
}

export default Component;
