import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/j7gwv8bmj.css';
import '../../css/a/aqe8ou0pa.css';
import '../../css/j/jqr8ne24y.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="j7gwv8bmj wm-deco"/><path class="aqe8ou0pa wm-deco"/><path class="jqr8ne24y wm-k"/><path class="jmo57ab0a wm-a"/></g>`,
		"fallback": "withicons:badge-x-blueprint",
	});
}

export default Component;
