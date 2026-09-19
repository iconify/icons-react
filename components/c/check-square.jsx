import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wiib7gvxp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wiib7gvxp"/>`,
		"fallback": "fa-regular:check-square",
	});
}

export default Component;
