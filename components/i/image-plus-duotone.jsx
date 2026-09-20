import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2g_mm_im.css';
import '../../css/i/iz8c3l5-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2g_mm_im"/><path class="iz8c3l5-w"/>`,
		"fallback": "stash:image-plus-duotone",
	});
}

export default Component;
