import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dpx_oobfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dpx_oobfh"/>`,
		"fallback": "ri:connector-line",
	});
}

export default Component;
