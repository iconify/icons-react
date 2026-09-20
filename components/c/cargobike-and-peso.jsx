import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og4po_btm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og4po_btm"/>`,
		"fallback": "pinhead:cargobike-and-peso",
	});
}

export default Component;
