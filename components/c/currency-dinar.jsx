import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cw019quyh.css';
import '../../css/q/q7jmlbb5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cw019quyh"/><path class="q7jmlbb5l"/></g>`,
		"fallback": "tabler:currency-dinar",
	});
}

export default Component;
