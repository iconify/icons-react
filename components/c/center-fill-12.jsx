import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r34k3ubvx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r34k3ubvx"/>`,
		"fallback": "garden:center-fill-12",
	});
}

export default Component;
