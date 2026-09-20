import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/p/p66qvaczk.css';
import '../../css/u/uavvujbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="p66qvaczk"/><path clip-rule="evenodd" class="uavvujbes"/></g>`,
		"fallback": "streamline-logos:google-lens-logo",
	});
}

export default Component;
