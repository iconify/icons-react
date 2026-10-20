import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z662ojbzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z662ojbzr"/>`,
		"fallback": "energy-icons:distribute-horizontal-48",
	});
}

export default Component;
