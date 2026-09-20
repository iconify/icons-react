import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jrf6iq1zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jrf6iq1zk"/>`,
		"fallback": "mdi:amplitude",
	});
}

export default Component;
