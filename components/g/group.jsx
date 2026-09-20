import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/am_ozbj2p.css';
import '../../css/m/m480t7bik.css';
import '../../css/q/qty78om7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="am_ozbj2p"/><rect class="m480t7bik"/><rect class="qty78om7n"/></g>`,
		"fallback": "lucide:group",
	});
}

export default Component;
