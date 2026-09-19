import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-mk3b7t.css';

const viewBox = {"width":192,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk-mk3b7t"/>`,
		"fallback": "zmdi:female",
	});
}

export default Component;
