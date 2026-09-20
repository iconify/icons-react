import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrmuud_5g.css';
import '../../css/l/lcyii6bqn.css';
import '../../css/x/x2yq7dqap.css';
import '../../css/b/bku-i3w6b.css';
import '../../css/o/otianebdo.css';
import '../../css/r/rrpz0cwhx.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vrmuud_5g"><path class="lcyii6bqn"/><path class="x2yq7dqap"/></g><path class="bku-i3w6b"/><path class="otianebdo"/><path class="rrpz0cwhx"/>`,
		"fallback": "thesvg-color:fusion-360",
	});
}

export default Component;
