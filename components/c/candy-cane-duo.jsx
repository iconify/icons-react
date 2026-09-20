import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thjuvbz3w.css';
import '../../css/d/d_ocesu0j.css';
import '../../css/j/jlg0b3bga.css';
import '../../css/f/f4ppiobje.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="thjuvbz3w"><path class="d_ocesu0j"/><path class="jlg0b3bga"/><path class="f4ppiobje"/></g>`,
		"fallback": "streamline-stickies-color:candy-cane-duo",
	});
}

export default Component;
