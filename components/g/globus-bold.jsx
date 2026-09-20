import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_xc6ub8v.css';
import '../../css/u/unxgk-kjr.css';
import '../../css/x/xuokrglbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_xc6ub8v"/><path class="unxgk-kjr"/><path clip-rule="evenodd" class="xuokrglbz"/>`,
		"fallback": "solar:globus-bold",
	});
}

export default Component;
