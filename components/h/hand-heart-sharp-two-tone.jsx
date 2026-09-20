import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/m/mtaku8dyr.css';
import '../../css/o/ow0zocnmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="mtaku8dyr"/><path class="ow0zocnmg"/></g>`,
		"fallback": "keyline-icons:hand-heart-sharp-two-tone",
	});
}

export default Component;
