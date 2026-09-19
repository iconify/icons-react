import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fy3be5beq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fy3be5beq"/>`,
		"fallback": "fa6-regular:folder-closed",
	});
}

export default Component;
