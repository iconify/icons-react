import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwh-h-rhk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwh-h-rhk"/>`,
		"fallback": "teenyicons:arrow-right-circle-outline",
	});
}

export default Component;
