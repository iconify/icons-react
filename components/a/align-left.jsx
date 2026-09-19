import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx8y2ds-k.css';
import '../../css/m/mwfiol2dj.css';
import '../../css/r/rwc7d5bjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gx8y2ds-k"><path class="mwfiol2dj"/><path class="rwc7d5bjq"/></g>`,
		"fallback": "akar-icons:align-left",
	});
}

export default Component;
