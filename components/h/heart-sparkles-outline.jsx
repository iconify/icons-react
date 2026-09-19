import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hmikwmbtn.css';
import '../../css/s/sryxx_bpz.css';
import '../../css/w/wryx67bub.css';
import '../../css/s/s6vgiefch.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hmikwmbtn"/><path clip-rule="evenodd" class="sryxx_bpz"/><path class="wryx67bub"/><path clip-rule="evenodd" class="s6vgiefch"/></g>`,
		"fallback": "glyphs:heart-sparkles-outline",
	});
}

export default Component;
