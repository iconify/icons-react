import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uek5jjtrg.css';
import '../../css/p/psb-p714j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uek5jjtrg"/><path class="psb-p714j"/>`,
		"fallback": "streamline-ultimate:circus-elephant-bold",
	});
}

export default Component;
