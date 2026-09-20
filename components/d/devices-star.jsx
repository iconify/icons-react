import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m-tz0bg8m.css';
import '../../css/k/kmf06sbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m-tz0bg8m"/><path class="kmf06sbmz"/></g>`,
		"fallback": "tabler:devices-star",
	});
}

export default Component;
