import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5aho55cg.css';

const viewBox = {"width":1216,"height":2016};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5aho55cg"/>`,
		"fallback": "vs:door-open",
	});
}

export default Component;
