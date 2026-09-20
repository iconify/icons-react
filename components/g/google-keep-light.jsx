import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk-2meg8e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk-2meg8e"/>`,
		"fallback": "selfhst:google-keep-light",
	});
}

export default Component;
