import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9-earbsa.css';
import '../../css/q/qsb76ttdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l9-earbsa"/><path class="qsb76ttdk"/></g>`,
		"fallback": "lucide-extended:heart-handshake-duotone",
	});
}

export default Component;
