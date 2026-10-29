import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ipp24cu5y.css';
import '../../css/s/srwwv-s6o.css';
import '../../css/g/grszprbdj.css';
import '../../css/l/l6asqsbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ipp24cu5y wm-k"/><path class="srwwv-s6o"/><path class="grszprbdj"/><path class="l6asqsbbk wm-s"/></g>`,
		"fallback": "withicons-bauhaus:bell-plus",
	});
}

export default Component;
