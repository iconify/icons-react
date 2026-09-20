import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eio-gbbes.css';
import '../../css/m/mdcqdvwvs.css';
import '../../css/l/lu32vyb3z.css';
import '../../css/e/egyx_dwjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eio-gbbes"/><path class="mdcqdvwvs"/><path class="lu32vyb3z"/><path class="egyx_dwjt"/></g>`,
		"fallback": "tdesign:film",
	});
}

export default Component;
