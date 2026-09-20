import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6_haebsa.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6_haebsa"/>`,
		"fallback": "teenyicons:float-right-outline",
	});
}

export default Component;
