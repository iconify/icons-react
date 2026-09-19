import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u10idp0ti.css';
import '../../css/k/k0y2i9b3f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u10idp0ti"/><path class="k0y2i9b3f"/></g>`,
		"fallback": "bi:file-earmark-easel-fill",
	});
}

export default Component;
