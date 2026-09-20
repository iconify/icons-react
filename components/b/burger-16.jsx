import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3ttebb7p.css';
import '../../css/k/km_nv7h3m.css';
import '../../css/l/lahok-bbv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e3ttebb7p"/><path class="km_nv7h3m"/><path class="lahok-bbv"/>`,
		"fallback": "qlementine-icons:burger-16",
	});
}

export default Component;
