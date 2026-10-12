import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oh5trphtn.css';
import '../../css/e/exxq6kbnv.css';
import '../../css/s/sp_nd288j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="oh5trphtn"/><rect class="exxq6kbnv"/><path class="sp_nd288j"/></g>`,
		"fallback": "andrsrxn:actual-size",
	});
}

export default Component;
