import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf4n8dbvk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf4n8dbvk"/>`,
		"fallback": "dashicons:hourglass",
	});
}

export default Component;
