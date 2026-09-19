import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8rtl1bmh.css';
import '../../css/k/kcrnsgfwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8rtl1bmh"/><path class="kcrnsgfwg"/>`,
		"fallback": "bx:cloud-upload",
	});
}

export default Component;
