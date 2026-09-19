import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pu2beabvv.css';
import '../../css/s/sxhhi-wtg.css';
import '../../css/z/zk4tyk1ns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="pu2beabvv"/><path class="sxhhi-wtg"/><path class="zk4tyk1ns"/></g>`,
		"fallback": "bitcoin-icons:boat-outline",
	});
}

export default Component;
