import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iix9a7bjv.css';
import '../../css/z/z1zo10qgy.css';
import '../../css/a/a4vvybadx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="iix9a7bjv"/><path class="z1zo10qgy"/><path class="a4vvybadx"/></g>`,
		"fallback": "andrsrxn:gas-tank",
	});
}

export default Component;
