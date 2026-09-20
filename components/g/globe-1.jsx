import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/j/j60x4ibro.css';
import '../../css/k/kuluz7b6w.css';
import '../../css/h/hpt2qmxzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="j60x4ibro"/><path class="kuluz7b6w"/><path class="hpt2qmxzh"/></g>`,
		"fallback": "streamline-cyber:globe-1",
	});
}

export default Component;
