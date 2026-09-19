import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/ndb7b7lyp.css';
import '../../css/j/jcjjd5bjf.css';
import '../../css/g/gxdryjbrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ndb7b7lyp"/><path class="jcjjd5bjf"/><path class="gxdryjbrf"/></g>`,
		"fallback": "icon-park-solid:add-item",
	});
}

export default Component;
