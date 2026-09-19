import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi_lh7bxp.css';
import '../../css/l/lu06jwoxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi_lh7bxp"/><path class="lu06jwoxi"/>`,
		"fallback": "flat-color-icons:bbc",
	});
}

export default Component;
