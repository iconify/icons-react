import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ecj5zxb4g.css';
import '../../css/y/yaud6rfsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><rect class="ecj5zxb4g"/><path class="yaud6rfsk"/></g>`,
		"fallback": "icon-park-outline:grid-four",
	});
}

export default Component;
