import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1yxcf2mo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1yxcf2mo"/>`,
		"fallback": "streamline:flash-2-remix",
	});
}

export default Component;
