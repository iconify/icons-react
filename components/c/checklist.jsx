import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/k0ly7u-ku.css';
import '../../css/a/a7z-x8bxc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="k0ly7u-ku"/><path class="a7z-x8bxc"/></g>`,
		"fallback": "icon-park-solid:checklist",
	});
}

export default Component;
