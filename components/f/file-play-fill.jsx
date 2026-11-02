import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvbm_uvgv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvbm_uvgv"/>`,
		"fallback": "mingcute:file-play-fill",
	});
}

export default Component;
