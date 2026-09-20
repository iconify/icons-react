import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/s/su1kuc3dh.css';
import '../../css/v/vvzc_wdye.css';
import '../../css/v/vlevckb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="su1kuc3dh"/><path class="vvzc_wdye"/><path class="vlevckb8k"/></g>`,
		"fallback": "streamline-cyber:cloud-refresh",
	});
}

export default Component;
