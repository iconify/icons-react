import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqti1gxhc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rqti1gxhc"/>`,
		"fallback": "griddy-icons:annotation-check",
	});
}

export default Component;
