import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zydcpabso.css';
import '../../css/x/xdj82wxwd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zydcpabso"/><path class="xdj82wxwd"/>`,
		"fallback": "ion:bag-check-outline",
	});
}

export default Component;
