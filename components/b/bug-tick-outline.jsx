import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xyes79och.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xyes79och"/>`,
		"fallback": "mdi:bug-tick-outline",
	});
}

export default Component;
