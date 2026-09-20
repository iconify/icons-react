import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zvtc_9i2b.css';
import '../../css/q/q3lw8vbat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="zvtc_9i2b"/><path class="q3lw8vbat"/></g>`,
		"fallback": "lucide:egg-fried",
	});
}

export default Component;
