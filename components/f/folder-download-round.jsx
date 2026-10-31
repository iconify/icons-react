import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bttcv_vis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bttcv_vis"/>`,
		"fallback": "coolicons:folder-download-round",
	});
}

export default Component;
