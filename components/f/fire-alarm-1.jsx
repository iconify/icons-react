import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jkhs1fbcu.css';
import '../../css/v/vyfn6zb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jkhs1fbcu"/><path class="vyfn6zb-e"/></g>`,
		"fallback": "streamline-sharp:fire-alarm-1",
	});
}

export default Component;
