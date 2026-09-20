import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifftp-7_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifftp-7_v"/>`,
		"fallback": "octicon:code-of-conduct-24",
	});
}

export default Component;
