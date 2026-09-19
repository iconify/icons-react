import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jcjb6ibjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jcjb6ibjw"/>`,
		"fallback": "fa6-solid:circle",
	});
}

export default Component;
