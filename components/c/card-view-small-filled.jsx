import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_g_psdmk.css';
import '../../css/j/ji90m8bhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="r_g_psdmk"/><path class="ji90m8bhz"/>`,
		"fallback": "boxicons:card-view-small-filled",
	});
}

export default Component;
