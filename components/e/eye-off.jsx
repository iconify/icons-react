import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6qob_08r.css';

const viewBox = {"width":472,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6qob_08r"/>`,
		"fallback": "zmdi:eye-off",
	});
}

export default Component;
