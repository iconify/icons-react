import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dur0b2p3t.css';
import '../../css/k/kqwq9psty.css';
import '../../css/u/u9hq09b6k.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dur0b2p3t"/><path class="kqwq9psty"/><path class="u9hq09b6k"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:flag-germany",
	});
}

export default Component;
