import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/v/vqy4eo6yp.css';
import '../../css/w/w-kr1db0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="vqy4eo6yp"/><path class="w-kr1db0e"/></g>`,
		"fallback": "streamline-logos:consul-logo",
	});
}

export default Component;
