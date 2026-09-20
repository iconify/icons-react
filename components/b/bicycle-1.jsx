import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/jihl8sbdi.css';
import '../../css/q/qosv2bs_d.css';
import '../../css/s/szkgv3bwl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="jihl8sbdi"/><path class="qosv2bs_d"/><path class="szkgv3bwl"/></g>`,
		"fallback": "streamline-cyber:bicycle-1",
	});
}

export default Component;
