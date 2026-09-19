import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mctbzzbwt.css';
import '../../css/r/rc1x__fgz.css';
import '../../css/d/d1gyirboi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mctbzzbwt"/><path class="rc1x__fgz"/><path class="d1gyirboi"/></g>`,
		"fallback": "icon-park-outline:elevator",
	});
}

export default Component;
