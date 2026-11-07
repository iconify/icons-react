import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wipgr75ah.css';
import '../../css/u/ujptxiz3v.css';
import '../../css/t/tkq4zwbvg.css';
import '../../css/t/ti1egob9t.css';
import '../../css/w/wm3p8rb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wipgr75ah"/><path class="ujptxiz3v"/><path class="tkq4zwbvg"/><path class="ti1egob9t"/><path class="wm3p8rb_z"/></g>`,
		"fallback": "solar:flip-vertical-line-duotone",
	});
}

export default Component;
