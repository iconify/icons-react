import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plm5xnbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plm5xnbgf"/>`,
		"fallback": "mingcute:file-axis-3d-line",
	});
}

export default Component;
