import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-rofk-2e.css';
import '../../css/x/xjva70f_t.css';
import '../../css/f/febthzbpd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="q-rofk-2e"/><rect class="xjva70f_t"/><path clip-rule="evenodd" class="febthzbpd"/></g>`,
		"fallback": "glyphs-poly:crown",
	});
}

export default Component;
