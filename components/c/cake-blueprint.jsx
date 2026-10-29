import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zzo76fjef.css';
import '../../css/m/mqe35ibvh.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/h/h8z-o8bfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zzo76fjef"/><path class="mqe35ibvh wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="h8z-o8bfu"/></g>`,
		"fallback": "withicons:cake-blueprint",
	});
}

export default Component;
