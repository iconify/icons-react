import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2wxxeb7n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2wxxeb7n"/>`,
		"fallback": "teenyicons:codepen-outline",
	});
}

export default Component;
