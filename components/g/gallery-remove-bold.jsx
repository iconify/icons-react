import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmi9_q11s.css';
import '../../css/k/ktvdpubsh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmi9_q11s"/><path clip-rule="evenodd" class="ktvdpubsh"/>`,
		"fallback": "solar:gallery-remove-bold",
	});
}

export default Component;
