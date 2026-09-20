import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8ecjla3i.css';
import '../../css/u/ucqje3dcn.css';
import '../../css/b/bl_qslbwu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8ecjla3i"/><path class="ucqje3dcn"/><path class="bl_qslbwu"/>`,
		"fallback": "vaadin:bullseye",
	});
}

export default Component;
