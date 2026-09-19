import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/z/z4t_q8ban.css';
import '../../css/b/boi2cq1kx.css';
import '../../css/n/nkyq2pxpo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="z4t_q8ban"/><rect class="boi2cq1kx"/><path class="nkyq2pxpo"/></g>`,
		"fallback": "icon-park:hammer-and-anvil",
	});
}

export default Component;
