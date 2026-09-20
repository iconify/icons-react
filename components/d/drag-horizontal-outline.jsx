import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-91d64oc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-91d64oc"/>`,
		"fallback": "teenyicons:drag-horizontal-outline",
	});
}

export default Component;
