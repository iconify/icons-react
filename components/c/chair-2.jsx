import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ueyw_vbtu.css';
import '../../css/n/n35sledon.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ueyw_vbtu"/><path class="n35sledon"/></g>`,
		"fallback": "si-glyph:chair-2",
	});
}

export default Component;
