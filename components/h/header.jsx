import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkwr-26dr.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkwr-26dr"/>`,
		"fallback": "fa7-solid:header",
	});
}

export default Component;
