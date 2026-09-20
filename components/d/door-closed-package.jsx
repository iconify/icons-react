import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r8n3vrsaz.css';
import '../../css/r/rgugm1w5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="r8n3vrsaz"/><rect class="rgugm1w5r"/></g>`,
		"fallback": "lucide:door-closed-package",
	});
}

export default Component;
