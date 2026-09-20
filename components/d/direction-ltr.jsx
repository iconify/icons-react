import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l77vd0brf.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l77vd0brf"/>`,
		"fallback": "lineicons:direction-ltr",
	});
}

export default Component;
