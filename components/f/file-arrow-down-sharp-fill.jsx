import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/adfmt_bia.css';
import '../../css/k/kgk21lfsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="adfmt_bia"/><path class="kgk21lfsq"/></g>`,
		"fallback": "keyline-icons:file-arrow-down-sharp-fill",
	});
}

export default Component;
