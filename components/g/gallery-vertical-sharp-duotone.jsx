import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/h67i96k3t.css';
import '../../css/p/pzkmj5byd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="h67i96k3t"/><path class="pzkmj5byd"/></g>`,
		"fallback": "keyline-icons:gallery-vertical-sharp-duotone",
	});
}

export default Component;
