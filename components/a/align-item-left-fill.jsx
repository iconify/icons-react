import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yx_qj-bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yx_qj-bhv"/>`,
		"fallback": "ri:align-item-left-fill",
	});
}

export default Component;
