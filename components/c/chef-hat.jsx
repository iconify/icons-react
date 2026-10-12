import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozu8-riqn.css';
import '../../css/s/snz624yyq.css';
import '../../css/e/eikrn6b5k.css';
import '../../css/g/gvw7aj9zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozu8-riqn"/><path class="snz624yyq"/><path class="eikrn6b5k"/><path class="gvw7aj9zw"/></g>`,
		"fallback": "andrsrxn:chef-hat",
	});
}

export default Component;
