import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/sz9e8238f.css';
import '../../css/w/w_8gvccbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="sz9e8238f"/><path class="w_8gvccbg"/></g>`,
		"fallback": "icon-park-solid:coat-hanger",
	});
}

export default Component;
