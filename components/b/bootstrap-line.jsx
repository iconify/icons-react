import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsl8n1rvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsl8n1rvl"/>`,
		"fallback": "ri:bootstrap-line",
	});
}

export default Component;
