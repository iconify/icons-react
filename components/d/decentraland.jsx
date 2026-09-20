import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvtud_y2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvtud_y2r"/>`,
		"fallback": "simple-icons:decentraland",
	});
}

export default Component;
