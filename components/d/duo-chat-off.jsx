import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtp_8xwkj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gtp_8xwkj"/>`,
		"fallback": "pajamas:duo-chat-off",
	});
}

export default Component;
