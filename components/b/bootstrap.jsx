import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a53tm5d4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a53tm5d4q"/>`,
		"fallback": "mdi:bootstrap",
	});
}

export default Component;
