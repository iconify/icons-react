import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsp_i4bhb.css';
import '../../css/b/bh5i2pbed.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsp_i4bhb"/><path class="bh5i2pbed"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-magnifying-glass",
	});
}

export default Component;
