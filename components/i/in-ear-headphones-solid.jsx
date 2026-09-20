import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0jvsm82e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0jvsm82e"/>`,
		"fallback": "teenyicons:in-ear-headphones-solid",
	});
}

export default Component;
