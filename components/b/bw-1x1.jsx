import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kdnqezbvd.css';
import '../../css/i/iufaf7g1w.css';
import '../../css/a/a9jjuv2wa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kdnqezbvd"/><path class="iufaf7g1w"/><path class="a9jjuv2wa"/></g>`,
		"fallback": "flag:bw-1x1",
	});
}

export default Component;
