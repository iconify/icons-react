import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h3svtlbuv.css';
import '../../css/m/m7d45up-b.css';
import '../../css/s/sn07vob-o.css';
import '../../css/l/lilw-wb5x.css';
import '../../css/o/ollpn-_wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h3svtlbuv"/><path class="m7d45up-b"/><path class="sn07vob-o"/><path class="lilw-wb5x"/><path class="ollpn-_wg"/></g>`,
		"fallback": "withicons-bauhaus:avatar-man-turban",
	});
}

export default Component;
