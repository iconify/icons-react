import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf8tgcb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf8tgcb2q"/>`,
		"fallback": "ri:body-scan-fill",
	});
}

export default Component;
