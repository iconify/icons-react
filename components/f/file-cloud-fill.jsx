import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it_k10b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it_k10b_n"/>`,
		"fallback": "ri:file-cloud-fill",
	});
}

export default Component;
