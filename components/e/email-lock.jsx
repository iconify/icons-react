import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/b/bo54uqb8g.css';
import '../../css/j/jv39n-c4r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="bo54uqb8g"/><path class="jv39n-c4r"/></g>`,
		"fallback": "icon-park-solid:email-lock",
	});
}

export default Component;
