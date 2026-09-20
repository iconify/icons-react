import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8cxt48ie.css';
import '../../css/s/s-xxlii2p.css';
import '../../css/q/q0ouhhhum.css';
import '../../css/d/d9loopb4b.css';
import '../../css/w/web667b_o.css';
import '../../css/f/f34ytpb0b.css';
import '../../css/b/bw5mh65tu.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8cxt48ie"/><path class="s-xxlii2p"/><path class="q0ouhhhum"/><circle class="d9loopb4b"/><path class="web667b_o"/><path class="f34ytpb0b"/><circle class="bw5mh65tu"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-ethiopia",
	});
}

export default Component;
