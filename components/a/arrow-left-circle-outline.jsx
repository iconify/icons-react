import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak0n-9bdm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak0n-9bdm"/>`,
		"fallback": "teenyicons:arrow-left-circle-outline",
	});
}

export default Component;
