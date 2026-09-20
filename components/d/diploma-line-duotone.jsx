import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wifewsb1l.css';
import '../../css/a/aw_85mb7u.css';
import '../../css/m/mwn-ncj6a.css';
import '../../css/h/h3xl994jw.css';
import '../../css/v/v3g6xoxym.css';
import '../../css/j/j6p0y4-0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wifewsb1l"/><path class="aw_85mb7u"/><path class="mwn-ncj6a"/><path class="h3xl994jw"/><circle class="v3g6xoxym"/><path class="j6p0y4-0y"/></g>`,
		"fallback": "solar:diploma-line-duotone",
	});
}

export default Component;
