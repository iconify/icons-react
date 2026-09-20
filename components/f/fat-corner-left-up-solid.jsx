import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd_-_xc8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd_-_xc8s"/>`,
		"fallback": "mynaui:fat-corner-left-up-solid",
	});
}

export default Component;
