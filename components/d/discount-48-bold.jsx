import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a88-_pnxg.css';
import '../../css/o/ocasejnlo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a88-_pnxg"/><path class="ocasejnlo"/>`,
		"fallback": "energy-icons:discount-48-bold",
	});
}

export default Component;
