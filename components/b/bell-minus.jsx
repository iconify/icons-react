import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/e4x4atbvu.css';
import '../../css/s/srwwv-s6o.css';
import '../../css/g/grszprbdj.css';
import '../../css/p/pqaf0xbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="e4x4atbvu wm-k"/><path class="srwwv-s6o"/><path class="grszprbdj"/><path class="pqaf0xbvj wm-s"/></g>`,
		"fallback": "withicons-bauhaus:bell-minus",
	});
}

export default Component;
