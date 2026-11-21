import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qat8gccgr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qat8gccgr"/>`,
		"fallback": "selfhst:actual-mcp-server-light",
	});
}

export default Component;
