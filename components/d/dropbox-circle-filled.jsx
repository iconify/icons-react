import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwc9mxbxm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwc9mxbxm"/>`,
		"fallback": "ant-design:dropbox-circle-filled",
	});
}

export default Component;
