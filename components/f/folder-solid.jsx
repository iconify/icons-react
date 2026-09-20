import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gew9h3fsm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gew9h3fsm"/>`,
		"fallback": "teenyicons:folder-solid",
	});
}

export default Component;
