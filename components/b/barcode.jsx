import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrmz5hbzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrmz5hbzq"/>`,
		"fallback": "boxicons:barcode",
	});
}

export default Component;
