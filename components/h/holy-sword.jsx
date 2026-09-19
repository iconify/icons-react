import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/d/dlzrbubrh.css';
import '../../css/a/as6-xr61g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="dlzrbubrh"/><path class="as6-xr61g"/></g>`,
		"fallback": "icon-park-solid:holy-sword",
	});
}

export default Component;
