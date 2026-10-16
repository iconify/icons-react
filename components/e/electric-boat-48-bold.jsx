import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdtvt3bkl.css';
import '../../css/l/l1gaefbhe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdtvt3bkl"/><path class="l1gaefbhe"/>`,
		"fallback": "energy-icons:electric-boat-48-bold",
	});
}

export default Component;
