import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m8hk_pbni.css';
import '../../css/s/se2-xs8se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m8hk_pbni"/><path class="se2-xs8se"/></g>`,
		"fallback": "streamline-freehand:gps-location-rectangle",
	});
}

export default Component;
