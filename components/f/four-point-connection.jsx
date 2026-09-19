import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/ko35661_d.css';
import '../../css/r/ra788cbnf.css';
import '../../css/d/dn4j-pb5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ko35661_d"/><path class="ra788cbnf"/><path class="dn4j-pb5x"/></g>`,
		"fallback": "icon-park-solid:four-point-connection",
	});
}

export default Component;
