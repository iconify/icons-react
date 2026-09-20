import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qmnd073qv.css';
import '../../css/r/r5neqmb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qmnd073qv"/><path class="r5neqmb5z"/></g>`,
		"fallback": "tabler:address-book",
	});
}

export default Component;
