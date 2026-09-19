import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/biu392k5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="biu392k5c"/>`,
		"fallback": "boxicons:cloud-snow-filled",
	});
}

export default Component;
