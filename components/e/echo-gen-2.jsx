import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd0smrbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd0smrbkl"/>`,
		"fallback": "cbi:echo-gen-2",
	});
}

export default Component;
