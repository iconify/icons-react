import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ot78e65or.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ot78e65or"/>`,
		"fallback": "teenyicons:floorplan-outline",
	});
}

export default Component;
