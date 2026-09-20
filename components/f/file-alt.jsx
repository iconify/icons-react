import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umw_9vdvf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umw_9vdvf"/>`,
		"fallback": "pixelarticons:file-alt",
	});
}

export default Component;
