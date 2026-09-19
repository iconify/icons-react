import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh9871bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh9871bfn"/>`,
		"fallback": "boxicons:globe-alt-filled",
	});
}

export default Component;
