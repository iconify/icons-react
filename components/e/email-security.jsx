import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/t/t4c1a1byr.css';
import '../../css/z/z78yszbru.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="t4c1a1byr"/><path class="z78yszbru"/></g>`,
		"fallback": "icon-park-solid:email-security",
	});
}

export default Component;
