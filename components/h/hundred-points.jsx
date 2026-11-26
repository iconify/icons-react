import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-npdpb0r.css';
import '../../css/a/a2qsx5b4i.css';
import '../../css/b/bevv9x6yt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j-npdpb0r"><path class="a2qsx5b4i"/><path class="bevv9x6yt"/></g>`,
		"fallback": "xero-emoji:hundred-points",
	});
}

export default Component;
