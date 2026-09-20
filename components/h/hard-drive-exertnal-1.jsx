import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uc9v-pb0v.css';
import '../../css/i/i79qx-ncx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uc9v-pb0v"/><path class="i79qx-ncx"/>`,
		"fallback": "streamline-freehand:hard-drive-exertnal-1",
	});
}

export default Component;
