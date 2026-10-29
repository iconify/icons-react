import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/ce3j81iyt.css';
import '../../css/x/x4oh7ob3p.css';
import '../../css/i/iqg85keyw.css';
import '../../css/b/b67d4zo8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ce3j81iyt wm-a"/><path class="wm-a x4oh7ob3p"/><path class="iqg85keyw"/><path class="b67d4zo8u wm-a"/></g>`,
		"fallback": "withicons:chart-gantt-duo",
	});
}

export default Component;
