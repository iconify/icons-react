import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h3i5jzqgi.css';
import '../../css/f/flmaa1cdw.css';
import '../../css/f/fi6ymy76n.css';
import '../../css/c/cmqkprb0i.css';
import '../../css/v/vk6rz7b3w.css';
import '../../css/l/locfp3-im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h3i5jzqgi wm-k"/><path class="flmaa1cdw wm-k"/><path class="fi6ymy76n wm-k"/><path class="cmqkprb0i wm-a"/><path class="vk6rz7b3w wm-a"/><path class="locfp3-im wm-a"/></g>`,
		"fallback": "withicons-anime:arrow-up-from-line",
	});
}

export default Component;
