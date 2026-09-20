import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b78umyb_f.css';
import '../../css/t/tv0da6btf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b78umyb_f"/><path class="tv0da6btf"/></g>`,
		"fallback": "solar:bookmark-opened-bold",
	});
}

export default Component;
