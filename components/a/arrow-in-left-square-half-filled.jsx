import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ooaqbg7av.css';
import '../../css/l/l3bwhaczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ooaqbg7av"/><path class="l3bwhaczb"/>`,
		"fallback": "boxicons:arrow-in-left-square-half-filled",
	});
}

export default Component;
