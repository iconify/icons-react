import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubnxg2ces.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubnxg2ces"/>`,
		"fallback": "fa6-solid:angles-down",
	});
}

export default Component;
