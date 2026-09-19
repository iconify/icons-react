import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/f/faq_gcf0n.css';
import '../../css/z/zwak7zvkr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="faq_gcf0n"/><path class="zwak7zvkr"/></g>`,
		"fallback": "icon-park-outline:cardioelectric",
	});
}

export default Component;
