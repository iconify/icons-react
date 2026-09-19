import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/j/jf4xiob2j.css';
import '../../css/g/gpcy8vslv.css';
import '../../css/i/in_9y-pym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="jf4xiob2j"/><rect class="gpcy8vslv"/><path class="in_9y-pym"/></g>`,
		"fallback": "icon-park-outline:beauty-instrument",
	});
}

export default Component;
