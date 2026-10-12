import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wier_vbdb.css';
import '../../css/t/tv-on1bdd.css';
import '../../css/w/w1f5z-fwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wier_vbdb"/><path class="tv-on1bdd"/><path class="w1f5z-fwf"/></g>`,
		"fallback": "lucide-extended:align-horizontal-space-between-duotone",
	});
}

export default Component;
