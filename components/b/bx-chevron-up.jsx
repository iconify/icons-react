import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lml2oc9mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lml2oc9mw"/>`,
		"fallback": "bx:bx-chevron-up",
	});
}

export default Component;
