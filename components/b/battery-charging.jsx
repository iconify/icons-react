import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyei83bdy.css';
import '../../css/j/j2kfbpb_q.css';
import '../../css/k/k8wxikmhr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uyei83bdy"/><path class="j2kfbpb_q"/><path class="k8wxikmhr"/></g>`,
		"fallback": "streamline-color:battery-charging",
	});
}

export default Component;
