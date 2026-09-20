import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jszxh1b0i.css';
import '../../css/x/xrsgy2bxo.css';
import '../../css/f/f7d702b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jszxh1b0i"/><path class="xrsgy2bxo"/><path class="f7d702b9j"/></g>`,
		"fallback": "keyline-icons:broadcast-sharp-duotone",
	});
}

export default Component;
