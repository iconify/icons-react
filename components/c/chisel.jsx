import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbyp43w9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbyp43w9e"/>`,
		"fallback": "tabler:chisel",
	});
}

export default Component;
