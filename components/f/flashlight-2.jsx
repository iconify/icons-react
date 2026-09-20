import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_u4uzbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_u4uzbqj"/>`,
		"fallback": "streamline-cyber:flashlight-2",
	});
}

export default Component;
