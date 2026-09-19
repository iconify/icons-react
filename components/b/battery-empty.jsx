import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a6kjclb7s.css';

const viewBox = {"width":2304,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a6kjclb7s"/>`,
		"fallback": "fa:battery-empty",
	});
}

export default Component;
