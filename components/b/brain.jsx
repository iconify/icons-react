import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/k/ky9s8j_lj.css';
import '../../css/m/m_2b5m5bz.css';
import '../../css/y/yf88pr0jd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="ky9s8j_lj"/><path clip-rule="evenodd" class="m_2b5m5bz"/><path class="yf88pr0jd"/></g>`,
		"fallback": "icon-park-outline:brain",
	});
}

export default Component;
