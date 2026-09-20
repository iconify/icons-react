import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7m-1z1xy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7m-1z1xy"/>`,
		"fallback": "teenyicons:align-right-solid",
	});
}

export default Component;
