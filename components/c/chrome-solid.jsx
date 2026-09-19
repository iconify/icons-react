import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h96pf7_tx.css';
import '../../css/z/zfoilpbse.css';
import '../../css/u/uzcrctb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h96pf7_tx"/><path class="zfoilpbse"/><path class="uzcrctb7x"/>`,
		"fallback": "basil:chrome-solid",
	});
}

export default Component;
