import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t5jblw1zm.css';
import '../../css/j/jcs_7f-ea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="t5jblw1zm"/><path class="jcs_7f-ea"/></g>`,
		"fallback": "tabler:devices-dollar",
	});
}

export default Component;
