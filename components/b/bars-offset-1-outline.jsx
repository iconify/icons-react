import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k3lwisb1u.css';
import '../../css/u/u5iru7bpb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k3lwisb1u"/><path class="u5iru7bpb"/></g>`,
		"fallback": "glyphs:bars-offset-1-outline",
	});
}

export default Component;
