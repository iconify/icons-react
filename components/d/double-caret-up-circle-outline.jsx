import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lpm3sabez.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lpm3sabez"/>`,
		"fallback": "teenyicons:double-caret-up-circle-outline",
	});
}

export default Component;
