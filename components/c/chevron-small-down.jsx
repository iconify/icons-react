import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-cg9db9p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-cg9db9p"/>`,
		"fallback": "entypo:chevron-small-down",
	});
}

export default Component;
