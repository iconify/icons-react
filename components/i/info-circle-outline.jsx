import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upv0h93hw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upv0h93hw"/>`,
		"fallback": "teenyicons:info-circle-outline",
	});
}

export default Component;
