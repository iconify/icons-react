import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odjmcobiw.css';
import '../../css/v/v_ha0xbrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odjmcobiw"/><circle class="v_ha0xbrx"/>`,
		"fallback": "bx:bxs-book-reader",
	});
}

export default Component;
