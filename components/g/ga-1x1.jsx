import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xs9wfjbeo.css';
import '../../css/f/falyi8bpz.css';
import '../../css/x/xlv_o7opf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xs9wfjbeo"/><path class="falyi8bpz"/><path class="xlv_o7opf"/></g>`,
		"fallback": "flag:ga-1x1",
	});
}

export default Component;
