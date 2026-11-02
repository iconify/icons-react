import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4f4hpsrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4f4hpsrl"/>`,
		"fallback": "mingcute:document-3-line",
	});
}

export default Component;
