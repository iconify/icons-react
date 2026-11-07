import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wipgr75ah.css';
import '../../css/u/ujptxiz3v.css';
import '../../css/d/dykyzybzd.css';
import '../../css/r/rrkvivbbw.css';
import '../../css/p/psy6bjy8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wipgr75ah"/><path class="ujptxiz3v"/><path class="dykyzybzd"/><path class="rrkvivbbw"/><path class="psy6bjy8h"/></g>`,
		"fallback": "solar:flip-vertical-linear",
	});
}

export default Component;
