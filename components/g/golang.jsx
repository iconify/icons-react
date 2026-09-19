import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l40jc9brz.css';
import '../../css/k/knv_kx8ky.css';
import '../../css/b/bek5jfb-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l40jc9brz"/><path class="knv_kx8ky"/><path class="bek5jfb-b"/></g>`,
		"fallback": "grommet-icons:golang",
	});
}

export default Component;
