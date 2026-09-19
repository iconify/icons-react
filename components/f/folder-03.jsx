import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dam_szrrv.css';
import '../../css/l/lyjfm3blu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dam_szrrv"/><path class="lyjfm3blu"/></g>`,
		"fallback": "hugeicons:folder-03",
	});
}

export default Component;
