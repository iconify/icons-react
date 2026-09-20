import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hxz51vbka.css';
import '../../css/z/zx2p6bc7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hxz51vbka"/><path class="zx2p6bc7n"/></g>`,
		"fallback": "tabler:basket-up",
	});
}

export default Component;
