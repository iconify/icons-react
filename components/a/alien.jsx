import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vo528lbye.css';
import '../../css/m/mvd2r2aea.css';
import '../../css/g/guki40upc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vo528lbye"/><path class="mvd2r2aea"/><path class="guki40upc"/></g>`,
		"fallback": "andrsrxn:alien",
	});
}

export default Component;
