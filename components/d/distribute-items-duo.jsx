import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/em6m2n1kr.css';
import '../../css/l/lhxt9-k1c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="em6m2n1kr"/><path class="lhxt9-k1c"/></g>`,
		"fallback": "glyphs:distribute-items-duo",
	});
}

export default Component;
