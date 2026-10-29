import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i4s_a-1yt.css';
import '../../css/f/fqitrob5u.css';
import '../../css/h/hsmjbytjh.css';
import '../../css/g/gjam4dbsb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i4s_a-1yt wm-k"/><path class="fqitrob5u wm-s"/><path class="hsmjbytjh"/><path class="gjam4dbsb wm-s"/></g>`,
		"fallback": "withicons-bauhaus:file-pen",
	});
}

export default Component;
