import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/x/xa_5awkhe.css';
import '../../css/g/gv_l_9bmc.css';
import '../../css/v/vrk4e3cim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="xa_5awkhe"/><path class="gv_l_9bmc"/><path class="vrk4e3cim"/></g>`,
		"fallback": "streamline-cyber:badge-star-2",
	});
}

export default Component;
