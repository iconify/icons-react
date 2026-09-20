import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/z/zrv0qxp1c.css';
import '../../css/n/n6mgr1nnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="zrv0qxp1c"/><path class="n6mgr1nnp"/></g>`,
		"fallback": "streamline-cyber:cloud-smart-mobile-phone",
	});
}

export default Component;
