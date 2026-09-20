import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j424ztbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j424ztbtj"/>`,
		"fallback": "keyline-icons:caret-left-sharp-duotone",
	});
}

export default Component;
