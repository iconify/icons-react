import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anjpc_b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anjpc_b3a"/>`,
		"fallback": "mingcute:file-code-corner-fill",
	});
}

export default Component;
