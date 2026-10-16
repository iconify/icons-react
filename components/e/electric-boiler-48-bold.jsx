import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae3ox-mnm.css';
import '../../css/p/pook9-t4z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ae3ox-mnm"/><path class="pook9-t4z"/>`,
		"fallback": "energy-icons:electric-boiler-48-bold",
	});
}

export default Component;
