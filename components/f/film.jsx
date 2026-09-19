import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa17g_wlk.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa17g_wlk"/>`,
		"fallback": "fontisto:film",
	});
}

export default Component;
