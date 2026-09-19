import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh4bcoq2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh4bcoq2q"/>`,
		"fallback": "guidance:health-services",
	});
}

export default Component;
