import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/juia08uox.css';
import '../../css/u/u9-e2p27r.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="juia08uox"/><path class="u9-e2p27r"/><path class="f4vx4ccga"/></g>`,
		"fallback": "keyline-icons:calendar-off-sharp-duotone",
	});
}

export default Component;
