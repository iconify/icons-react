import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgx80dbgw.css';
import '../../css/s/sf0e3noev.css';
import '../../css/z/zmpjdkihd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgx80dbgw"/><path clip-rule="evenodd" class="sf0e3noev"/><path clip-rule="evenodd" class="zmpjdkihd"/>`,
		"fallback": "solar:dropper-minimalistic-2-outline",
	});
}

export default Component;
