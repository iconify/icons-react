import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co0fq6b0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co0fq6b0i"/>`,
		"fallback": "reicon:direct-down",
	});
}

export default Component;
