import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c8zemjwtb.css';
import '../../css/i/isqxqcc9p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="c8zemjwtb"/><path class="isqxqcc9p"/></g>`,
		"fallback": "icon-park-solid:breast-pump",
	});
}

export default Component;
