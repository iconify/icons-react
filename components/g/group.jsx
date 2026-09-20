import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yiyl2y67k.css';
import '../../css/u/u_fnnvbro.css';
import '../../css/j/j-rnvbj5k.css';
import '../../css/f/feb0qrb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yiyl2y67k"/><path class="u_fnnvbro"/><path class="j-rnvbj5k"/><path class="feb0qrb2i"/></g>`,
		"fallback": "streamline-cyber-color:group",
	});
}

export default Component;
