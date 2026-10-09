import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pju4p0r6w.css';
import '../../css/n/n8yz9-5xk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pju4p0r6w"/><path class="n8yz9-5xk"/>`,
		"fallback": "energy-icons:chevrons-up-48-bold",
	});
}

export default Component;
