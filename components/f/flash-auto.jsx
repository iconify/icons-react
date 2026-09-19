import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve-_k2a0b.css';
import '../../css/l/lp_00w9vw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve-_k2a0b"/><path class="lp_00w9vw"/>`,
		"fallback": "flat-color-icons:flash-auto",
	});
}

export default Component;
