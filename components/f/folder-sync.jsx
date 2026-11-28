import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/z/zyu_u8bwt.css';
import '../../css/n/nijo91b6q.css';
import '../../css/l/lbcpzmq3a.css';
import '../../css/e/e3qz36b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tgy8uab8v"/><path class="zyu_u8bwt"/><path class="nijo91b6q"/><path class="lbcpzmq3a"/><path class="e3qz36b2m"/></g>`,
		"fallback": "iconaut:folder-sync",
	});
}

export default Component;
