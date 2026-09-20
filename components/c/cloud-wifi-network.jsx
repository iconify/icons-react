import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/w45rbabwm.css';
import '../../css/h/ha2gn9bar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="w45rbabwm"/><path class="ha2gn9bar"/></g>`,
		"fallback": "streamline-cyber:cloud-wifi-network",
	});
}

export default Component;
