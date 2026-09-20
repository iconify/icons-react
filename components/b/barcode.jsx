import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvh2dc16q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvh2dc16q"/>`,
		"fallback": "tabler:barcode",
	});
}

export default Component;
