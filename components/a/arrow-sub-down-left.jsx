import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrc_9q2ij.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrc_9q2ij"/>`,
		"fallback": "ci:arrow-sub-down-left",
	});
}

export default Component;
