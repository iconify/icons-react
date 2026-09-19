import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tuiv5pbxl.css';
import '../../css/k/kzx2bsb8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tuiv5pbxl"/><path class="kzx2bsb8f"/></g>`,
		"fallback": "bi:file-pdf",
	});
}

export default Component;
