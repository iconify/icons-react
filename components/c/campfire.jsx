import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktril7bbt.css';
import '../../css/f/fc2llhakz.css';
import '../../css/a/au9icxb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktril7bbt"/><path class="fc2llhakz"/><path class="au9icxb0e"/></g>`,
		"fallback": "streamline-cyber-color:campfire",
	});
}

export default Component;
