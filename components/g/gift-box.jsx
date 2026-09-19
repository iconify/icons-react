import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/e/ec5u8ubjb.css';
import '../../css/y/ylfjxbcbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ec5u8ubjb"/><path class="ylfjxbcbp"/></g>`,
		"fallback": "icon-park-outline:gift-box",
	});
}

export default Component;
