import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzkml3d6r.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzkml3d6r"/>`,
		"fallback": "el:barcode",
	});
}

export default Component;
