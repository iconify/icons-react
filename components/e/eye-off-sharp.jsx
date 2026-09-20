import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj6j6-bzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj6j6-bzv"/>`,
		"fallback": "keyline-icons:eye-off-sharp",
	});
}

export default Component;
