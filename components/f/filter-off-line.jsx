import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jru7tb8nv.css';
import '../../css/h/ha4fv62ch.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 jru7tb8nv"/><path class="clr-i-outline clr-i-outline-path-2 ha4fv62ch"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:filter-off-line",
	});
}

export default Component;
