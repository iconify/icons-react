import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/miy2zskkp.css';
import '../../css/x/x_xkkzb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="miy2zskkp"/><path class="x_xkkzb9y"/></g>`,
		"fallback": "tabler:basket-share",
	});
}

export default Component;
