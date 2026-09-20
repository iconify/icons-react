import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt9muxegx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt9muxegx"/>`,
		"fallback": "ix:card-layout",
	});
}

export default Component;
