import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djqetsxsa.css';
import '../../css/w/wrzsu9bqa.css';
import '../../css/u/u4lwefb4s.css';
import '../../css/y/yiqioq5fn.css';
import '../../css/v/vbfb3bb6q.css';
import '../../css/x/xcinvyzvw.css';
import '../../css/i/i6ck08bjt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="djqetsxsa"/><path class="wrzsu9bqa"/><path class="u4lwefb4s"/><path class="yiqioq5fn"/><path class="vbfb3bb6q"/><path class="xcinvyzvw"/><path class="i6ck08bjt"/></g>`,
		"fallback": "skill-icons:elasticsearch-light",
	});
}

export default Component;
