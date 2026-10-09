import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub-di_unr.css';
import '../../css/d/dx_dw6rtl.css';
import '../../css/g/g-5s0nbbq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub-di_unr"/><path class="dx_dw6rtl"/><path class="g-5s0nbbq"/>`,
		"fallback": "energy-icons:cloche-48-bold",
	});
}

export default Component;
