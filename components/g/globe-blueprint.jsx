import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yq4w0ibij.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/x/xtdeyac8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yq4w0ibij"/><path class="o7-ag87sb wm-deco"/><path class="xtdeyac8r"/></g>`,
		"fallback": "withicons:globe-blueprint",
	});
}

export default Component;
