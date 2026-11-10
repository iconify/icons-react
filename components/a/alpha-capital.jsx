import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/i/igd2rabwx.css';
import '../../css/p/poorlhozs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="igd2rabwx"/><path class="poorlhozs"/></g>`,
		"fallback": "matita:alpha-capital",
	});
}

export default Component;
