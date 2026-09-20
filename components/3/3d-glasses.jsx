import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/ydvazebbd.css';
import '../../css/q/qmfn_3bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="ydvazebbd"/><path class="qmfn_3bzn"/></g>`,
		"fallback": "streamline-cyber:3d-glasses",
	});
}

export default Component;
