import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb7gbybnx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cb7gbybnx"/>`,
		"fallback": "streamline:car-battery-charging-remix",
	});
}

export default Component;
