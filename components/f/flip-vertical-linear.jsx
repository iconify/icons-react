import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yy0j9fbjs.css';
import '../../css/n/n0ojjm-uh.css';
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
		"content": `<g class="ipq1z-bjh"><path class="yy0j9fbjs"/><path class="n0ojjm-uh"/><path class="dykyzybzd"/><path class="rrkvivbbw"/><path class="psy6bjy8h"/></g>`,
		"fallback": "solar:flip-vertical-linear",
	});
}

export default Component;
