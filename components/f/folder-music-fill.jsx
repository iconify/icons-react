import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb1wm_dxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb1wm_dxf"/>`,
		"fallback": "ri:folder-music-fill",
	});
}

export default Component;
