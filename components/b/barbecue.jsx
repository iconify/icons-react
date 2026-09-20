import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/scnjp3e5g.css';
import '../../css/b/bri85kbqp.css';
import '../../css/r/r5v9wkb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="scnjp3e5g"/><circle class="bri85kbqp"/><path class="r5v9wkb7y"/></g>`,
		"fallback": "lucide-lab:barbecue",
	});
}

export default Component;
