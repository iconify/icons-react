import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/f/fngfi_ztl.css';
import '../../css/p/psdf5lb4l.css';
import '../../css/h/h7bcztycq.css';
import '../../css/t/t6c8t7gok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="fngfi_ztl"/><path class="psdf5lb4l"/><path class="h7bcztycq"/><path class="t6c8t7gok"/></g>`,
		"fallback": "bitcoin-icons:exchange-outline",
	});
}

export default Component;
