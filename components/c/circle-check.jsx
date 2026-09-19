import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us1oy_2ky.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="us1oy_2ky"/>`,
		"fallback": "gravity-ui:circle-check",
	});
}

export default Component;
