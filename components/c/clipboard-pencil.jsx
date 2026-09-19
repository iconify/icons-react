import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2auhh-bp.css';
import '../../css/v/vwi05mrad.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2auhh-bp"/><path class="vwi05mrad"/>`,
		"fallback": "foundation:clipboard-pencil",
	});
}

export default Component;
