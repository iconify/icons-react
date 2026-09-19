import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/u/uslx3w3ok.css';
import '../../css/v/v4b9bksfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="uslx3w3ok"/><path class="v4b9bksfe"/></g>`,
		"fallback": "hugeicons:chatting-01",
	});
}

export default Component;
