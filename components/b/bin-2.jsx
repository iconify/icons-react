import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_1yghbte.css';
import '../../css/q/q55fsjbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_1yghbte"/><path class="q55fsjbor"/></g>`,
		"fallback": "streamline-cyber-color:bin-2",
	});
}

export default Component;
