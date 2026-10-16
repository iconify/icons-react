import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1u8_-b9b.css';
import '../../css/a/a_6bvzblh.css';
import '../../css/d/d32_g_rfi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1u8_-b9b"/><path class="a_6bvzblh"/><path class="d32_g_rfi"/>`,
		"fallback": "energy-icons:hydrogen-blending-48-bold",
	});
}

export default Component;
