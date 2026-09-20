import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwc5_gbpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xwc5_gbpf"/>`,
		"fallback": "mynaui:flower",
	});
}

export default Component;
