import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctml66e9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctml66e9o"/>`,
		"fallback": "octicon:flame-24",
	});
}

export default Component;
