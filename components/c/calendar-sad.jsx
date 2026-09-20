import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x8aor9bgf.css';
import '../../css/o/o6zfdvb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x8aor9bgf"/><path class="o6zfdvb5x"/></g>`,
		"fallback": "tabler:calendar-sad",
	});
}

export default Component;
