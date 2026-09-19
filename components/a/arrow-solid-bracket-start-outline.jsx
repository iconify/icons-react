import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s2f8kf2sn.css';
import '../../css/k/k9e6wv89t.css';
import '../../css/u/usukl4bow.css';
import '../../css/j/jzvhfpbzx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s2f8kf2sn"/><path class="k9e6wv89t"/><path clip-rule="evenodd" class="usukl4bow"/><path class="jzvhfpbzx"/></g>`,
		"fallback": "glyphs:arrow-solid-bracket-start-outline",
	});
}

export default Component;
