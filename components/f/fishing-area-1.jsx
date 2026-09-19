import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kv6eoc9-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kv6eoc9-x"/>`,
		"fallback": "guidance:fishing-area-1",
	});
}

export default Component;
