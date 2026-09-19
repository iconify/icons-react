import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mbbbatbca.css';
import '../../css/z/z_83qsb1j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mbbbatbca"/><path class="z_83qsb1j"/></g>`,
		"fallback": "bi:file-earmark-lock-fill",
	});
}

export default Component;
