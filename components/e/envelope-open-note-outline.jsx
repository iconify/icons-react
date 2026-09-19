import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yn4_y8q_q.css';
import '../../css/b/bt-ahhqxu.css';
import '../../css/n/n61mitb0d.css';
import '../../css/y/y--rwpmhn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yn4_y8q_q"/><path clip-rule="evenodd" class="bt-ahhqxu"/><path class="n61mitb0d"/><path clip-rule="evenodd" class="y--rwpmhn"/></g>`,
		"fallback": "glyphs:envelope-open-note-outline",
	});
}

export default Component;
