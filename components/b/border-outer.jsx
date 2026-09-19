import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lprujtblw.css';
import '../../css/m/mti94ib8c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lprujtblw"/><path class="mti94ib8c"/>`,
		"fallback": "bx:border-outer",
	});
}

export default Component;
