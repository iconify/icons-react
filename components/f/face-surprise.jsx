import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f12djacis.css';
import '../../css/b/bt9-2rbpz.css';
import '../../css/t/tv-tkebki.css';
import '../../css/l/l8frkcbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f12djacis"/><circle transform="rotate(90 12 12)" class="bt9-2rbpz"/><path class="tv-tkebki"/><path class="l8frkcbhu"/></g>`,
		"fallback": "andrsrxn:face-surprise",
	});
}

export default Component;
