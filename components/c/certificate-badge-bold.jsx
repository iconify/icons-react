import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cutxrpgpy.css';
import '../../css/r/r9-nq5knj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cutxrpgpy"/><path class="r9-nq5knj"/></g>`,
		"fallback": "iconamoon:certificate-badge-bold",
	});
}

export default Component;
