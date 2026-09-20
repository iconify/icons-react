import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jb-03yjgh.css';
import '../../css/k/k7prnklgb.css';
import '../../css/y/yry0f8gtr.css';
import '../../css/p/pft_r5bmp.css';
import '../../css/g/gxzo7rjpn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jb-03yjgh"/><path class="k7prnklgb"/><path class="yry0f8gtr"/><path clip-rule="evenodd" class="pft_r5bmp"/><path class="gxzo7rjpn"/></g>`,
		"fallback": "streamline-kameleon-color:coffee-paper-glass-duo",
	});
}

export default Component;
