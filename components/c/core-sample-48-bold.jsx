import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r0tg29byf.css';
import '../../css/u/uy3553_vn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r0tg29byf"/><path class="uy3553_vn"/>`,
		"fallback": "energy-icons:core-sample-48-bold",
	});
}

export default Component;
