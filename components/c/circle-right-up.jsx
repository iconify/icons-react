import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/b/bcd2-ib8g.css';
import '../../css/p/pqa51l3ql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="bcd2-ib8g"/><path class="pqa51l3ql"/></g>`,
		"fallback": "icon-park:circle-right-up",
	});
}

export default Component;
