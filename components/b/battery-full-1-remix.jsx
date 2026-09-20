import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxff6ebhp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hxff6ebhp"/>`,
		"fallback": "streamline:battery-full-1-remix",
	});
}

export default Component;
