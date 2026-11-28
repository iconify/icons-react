import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf2w5qbja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qf2w5qbja"/>`,
		"fallback": "noviair:file-info",
	});
}

export default Component;
