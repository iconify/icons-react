import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq367fyro.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq367fyro"/>`,
		"fallback": "whh:cmd",
	});
}

export default Component;
