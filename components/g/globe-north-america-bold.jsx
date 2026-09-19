import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bpin_ybto.css';
import '../../css/b/boa-geyjv.css';
import '../../css/n/nt_zo_p2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bpin_ybto"/><path clip-rule="evenodd" class="boa-geyjv"/><path class="nt_zo_p2u"/></g>`,
		"fallback": "glyphs:globe-north-america-bold",
	});
}

export default Component;
