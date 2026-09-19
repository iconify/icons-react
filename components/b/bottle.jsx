import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/a3622aqmt.css';
import '../../css/d/dl46ut6jf.css';
import '../../css/y/ycgeubb3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="a3622aqmt"/><path clip-rule="evenodd" class="dl46ut6jf"/><path class="ycgeubb3k"/></g>`,
		"fallback": "icon-park-outline:bottle",
	});
}

export default Component;
