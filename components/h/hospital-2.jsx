import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9c0rinbm.css';
import '../../css/c/cj564hbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9c0rinbm"/><path clip-rule="evenodd" class="cj564hbjs"/>`,
		"fallback": "lineicons:hospital-2",
	});
}

export default Component;
