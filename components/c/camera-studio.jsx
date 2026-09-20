import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkm14zb_u.css';
import '../../css/e/emrf_55ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkm14zb_u"/><path class="emrf_55ka"/>`,
		"fallback": "streamline-freehand:camera-studio",
	});
}

export default Component;
