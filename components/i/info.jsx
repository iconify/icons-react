import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yk3akactx.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yk3akactx"/>`,
		"fallback": "f7:info",
	});
}

export default Component;
