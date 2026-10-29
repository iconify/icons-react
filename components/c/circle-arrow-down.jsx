import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxl6bezbx.css';
import '../../css/z/zzvwx-xsr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k yxl6bezbx"/><path class="wm-a zzvwx-xsr"/>`,
		"fallback": "withicons-bauhaus:circle-arrow-down",
	});
}

export default Component;
