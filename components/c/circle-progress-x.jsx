import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzxk17z8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzxk17z8i"/>`,
		"fallback": "keyline-icons:circle-progress-x",
	});
}

export default Component;
