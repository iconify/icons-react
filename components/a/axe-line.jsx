import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnr7lhbpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tnr7lhbpo"/>`,
		"fallback": "mingcute:axe-line",
	});
}

export default Component;
