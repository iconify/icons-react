import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq4sgrxgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq4sgrxgw"/>`,
		"fallback": "mingcute:barcode-scan-fill",
	});
}

export default Component;
