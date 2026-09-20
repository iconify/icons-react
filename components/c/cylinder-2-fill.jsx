import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvf_dk-1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hvf_dk-1e"/>`,
		"fallback": "mingcute:cylinder-2-fill",
	});
}

export default Component;
