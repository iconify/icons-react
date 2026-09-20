import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5qi60--x.css';
import '../../css/z/zqip_ybwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r5qi60--x"/><path class="zqip_ybwh"/>`,
		"fallback": "token:chat",
	});
}

export default Component;
