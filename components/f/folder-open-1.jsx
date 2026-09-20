import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi8tgtb-z.css';
import '../../css/d/dpqwqi72y.css';
import '../../css/s/si341hb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bi8tgtb-z"/><path class="dpqwqi72y"/><path class="si341hb2m"/></g>`,
		"fallback": "tdesign:folder-open-1",
	});
}

export default Component;
