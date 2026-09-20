import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0bn-3b4l.css';
import '../../css/n/n2h26q2vi.css';
import '../../css/o/oskwyx3to.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l0bn-3b4l"><path class="n2h26q2vi"/><path class="oskwyx3to"/></g><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-bouvet-island",
	});
}

export default Component;
