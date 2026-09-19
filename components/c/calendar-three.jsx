import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/hkyvvobuq.css';
import '../../css/x/xhe8el-mx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="hkyvvobuq"/><path class="xhe8el-mx"/></g>`,
		"fallback": "icon-park-outline:calendar-three",
	});
}

export default Component;
