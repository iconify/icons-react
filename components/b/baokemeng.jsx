import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3p1ybc1b.css';
import '../../css/b/bfaknubvb.css';
import '../../css/f/f6_uaj4ma.css';
import '../../css/g/gdphixb-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e3p1ybc1b"><path class="bfaknubvb"/><path class="f6_uaj4ma"/><path class="gdphixb-z"/></g>`,
		"fallback": "icon-park:baokemeng",
	});
}

export default Component;
