import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u2g18ubeq.css';
import '../../css/k/kmw72r0-w.css';
import '../../css/p/pmyvgs41w.css';
import '../../css/r/rf8cmab4i.css';
import '../../css/i/ifyzbpbsk.css';
import '../../css/p/p8f9ftbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="u2g18ubeq wm-shadow"/><path class="kmw72r0-w wm-shadow"/><path class="pmyvgs41w"/><path class="rf8cmab4i"/><path class="ifyzbpbsk"/><path class="p8f9ftbey"/></g>`,
		"fallback": "withicons-brutal:grape",
	});
}

export default Component;
