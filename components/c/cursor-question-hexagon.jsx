import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f7dwmwbwv.css';
import '../../css/n/ny06asbpd.css';
import '../../css/z/z_wpksjft.css';
import '../../css/z/zwe2nfbhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f7dwmwbwv"/><path class="ny06asbpd"/><path class="z_wpksjft"/><path class="zwe2nfbhb"/></g>`,
		"fallback": "streamline-cyber-color:cursor-question-hexagon",
	});
}

export default Component;
