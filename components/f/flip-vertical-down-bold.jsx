import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdshv-w4n.css';
import '../../css/j/j-cb_fbvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdshv-w4n"/><path class="j-cb_fbvc"/>`,
		"fallback": "streamline-ultimate:flip-vertical-down-bold",
	});
}

export default Component;
