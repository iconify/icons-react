import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mqd_qr68c.css';
import '../../css/e/elti8xbhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mqd_qr68c"/><circle class="elti8xbhv"/></g>`,
		"fallback": "lucide:calendar-clock",
	});
}

export default Component;
