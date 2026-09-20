import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy2o1zb9d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy2o1zb9d"/>`,
		"fallback": "oui:crosshairs",
	});
}

export default Component;
