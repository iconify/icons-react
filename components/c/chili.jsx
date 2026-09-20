import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbthnef-d.css';
import '../../css/d/dfxsht03w.css';
import '../../css/n/n6onbib8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xbthnef-d"/><path class="dfxsht03w"/><path class="n6onbib8h"/></g>`,
		"fallback": "tdesign:chili",
	});
}

export default Component;
