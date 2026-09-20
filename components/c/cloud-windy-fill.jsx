import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu4w_7b6f.css';
import '../../css/e/eov2hibfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu4w_7b6f"/><path class="eov2hibfs"/>`,
		"fallback": "mingcute:cloud-windy-fill",
	});
}

export default Component;
