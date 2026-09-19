import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/y/yrx0b2b3f.css';
import '../../css/p/p1h0mh26u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="yrx0b2b3f"/><path class="p1h0mh26u"/></g>`,
		"fallback": "icon-park-solid:email-delect",
	});
}

export default Component;
