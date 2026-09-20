import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak_q72b_c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ak_q72b_c"/>`,
		"fallback": "streamline-flex:airplane-disabled-remix",
	});
}

export default Component;
