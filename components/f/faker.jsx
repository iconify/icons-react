import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2e3_cb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2e3_cb_v"/>`,
		"fallback": "simple-icons:faker",
	});
}

export default Component;
