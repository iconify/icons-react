import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/m/mal8h_cek.css';
import '../../css/v/vruj481ro.css';
import '../../css/c/cuos0zlct.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="mal8h_cek"/><path class="vruj481ro"/><path class="cuos0zlct"/></g>`,
		"fallback": "glyphs:globe-earth-duo",
	});
}

export default Component;
