import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iczj8dlbv.css';
import '../../css/r/r20x0ob9k.css';
import '../../css/x/xv-bgwbgf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iczj8dlbv"/><path class="r20x0ob9k"/><path class="xv-bgwbgf"/>`,
		"fallback": "energy-icons:blade-recycling-48-bold",
	});
}

export default Component;
