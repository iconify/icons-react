import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pt07y0bxu.css';
import '../../css/y/y1r440bhs.css';
import '../../css/m/mxpx_sbmx.css';
import '../../css/p/pzmtr-buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pt07y0bxu"/><path class="y1r440bhs"/><path class="mxpx_sbmx"/><path clip-rule="evenodd" class="pzmtr-buq"/>`,
		"fallback": "solar:folder-code-outline",
	});
}

export default Component;
