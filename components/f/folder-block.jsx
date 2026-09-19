import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/km5f2b9ps.css';
import '../../css/s/sefvbv26e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="km5f2b9ps"/><path class="sefvbv26e"/></g>`,
		"fallback": "hugeicons:folder-block",
	});
}

export default Component;
