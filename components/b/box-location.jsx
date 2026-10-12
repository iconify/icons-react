import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/on6cs378z.css';
import '../../css/z/zok44gb2s.css';
import '../../css/i/i2jpvs3ph.css';
import '../../css/n/n6_rvmq3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="on6cs378z"/><path class="zok44gb2s"/><path class="i2jpvs3ph"/><path class="n6_rvmq3u"/></g>`,
		"fallback": "andrsrxn:box-location",
	});
}

export default Component;
