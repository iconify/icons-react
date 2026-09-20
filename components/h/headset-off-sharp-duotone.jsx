import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/kv98g033q.css';
import '../../css/t/thed6-b2p.css';
import '../../css/f/f4vx4ccga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="kv98g033q"/><path class="thed6-b2p"/><path class="f4vx4ccga"/></g>`,
		"fallback": "keyline-icons:headset-off-sharp-duotone",
	});
}

export default Component;
