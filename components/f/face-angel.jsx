import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ugcw7unzv.css';
import '../../css/p/pvqjxub1k.css';
import '../../css/r/rl-u0xban.css';
import '../../css/u/u2e6epbvc.css';
import '../../css/o/oneeiz9uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ugcw7unzv"/><path class="pvqjxub1k"/><ellipse transform="rotate(90 12 3.45)" class="rl-u0xban"/><path class="u2e6epbvc"/><path class="oneeiz9uh"/></g>`,
		"fallback": "andrsrxn:face-angel",
	});
}

export default Component;
