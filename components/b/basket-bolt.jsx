import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gvbjyggso.css';
import '../../css/q/qz7p6ubjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gvbjyggso"/><path class="qz7p6ubjw"/></g>`,
		"fallback": "tabler:basket-bolt",
	});
}

export default Component;
