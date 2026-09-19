import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/o3y-mwb9w.css';
import '../../css/z/zdq5ixbzs.css';
import '../../css/f/fi8jscb1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="o3y-mwb9w"/><rect class="zdq5ixbzs"/><path class="fi8jscb1n"/></g>`,
		"fallback": "icon-park-outline:hat",
	});
}

export default Component;
