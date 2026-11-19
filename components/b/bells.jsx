import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fp2i67btp.css';
import '../../css/f/f5a2m6bwg.css';
import '../../css/t/tqb0vgbgp.css';
import '../../css/h/h2wowl21p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fp2i67btp"/><path class="f5a2m6bwg"/><path class="tqb0vgbgp"/><path class="h2wowl21p"/></g>`,
		"fallback": "andrsrxn:bells",
	});
}

export default Component;
