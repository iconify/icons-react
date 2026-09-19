import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkvpgsusw.css';
import '../../css/w/wfyc2et-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkvpgsusw"/><path class="wfyc2et-g"/></g>`,
		"fallback": "iconamoon:camera-video-duotone",
	});
}

export default Component;
