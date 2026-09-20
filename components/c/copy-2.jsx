import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k2t3dco8k.css';
import '../../css/u/u-bmmzb2t.css';
import '../../css/f/f5lhneb6r.css';
import '../../css/a/afezo2lly.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k2t3dco8k"/><path class="u-bmmzb2t"/><path class="f5lhneb6r"/><path class="afezo2lly"/></g>`,
		"fallback": "streamline-flex-color:copy-2",
	});
}

export default Component;
