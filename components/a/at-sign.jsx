import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/k4qczcbzs.css';
import '../../css/w/wt--vackk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="k4qczcbzs"/><path class="wt--vackk"/></g>`,
		"fallback": "streamline-cyber:at-sign",
	});
}

export default Component;
