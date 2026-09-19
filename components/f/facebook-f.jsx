import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc9m1-b-g.css';

const viewBox = {"width":896,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nc9m1-b-g"/>`,
		"fallback": "fa:facebook-f",
	});
}

export default Component;
