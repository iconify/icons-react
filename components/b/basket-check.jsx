import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m435gnwno.css';
import '../../css/u/uvu00ibji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m435gnwno"/><path class="uvu00ibji"/></g>`,
		"fallback": "tabler:basket-check",
	});
}

export default Component;
