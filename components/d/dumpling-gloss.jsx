import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp8n_7c6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-k zp8n_7c6m"/>`,
		"fallback": "withicons:dumpling-gloss",
	});
}

export default Component;
