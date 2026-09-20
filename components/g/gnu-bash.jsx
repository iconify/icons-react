import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc-a-nvsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc-a-nvsn"/>`,
		"fallback": "thesvg-color:gnu-bash",
	});
}

export default Component;
