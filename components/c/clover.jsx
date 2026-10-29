import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sichtzbah.css';
import '../../css/o/og-zvdzmo.css';
import '../../css/o/oto75skeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="sichtzbah"/><path class="og-zvdzmo"/><path class="oto75skeb"/></g>`,
		"fallback": "withicons-bauhaus:clover",
	});
}

export default Component;
