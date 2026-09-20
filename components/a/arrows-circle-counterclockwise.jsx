import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkue-o9gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkue-o9gr"/>`,
		"fallback": "nrk:arrows-circle-counterclockwise",
	});
}

export default Component;
