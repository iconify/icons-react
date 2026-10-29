import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/b74rkzv8a.css';
import '../../css/m/mlr2voast.css';
import '../../css/s/shte9bcuj.css';
import '../../css/b/b83hx2bbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="b74rkzv8a wm-deco"/><path class="mlr2voast wm-k"/><path class="shte9bcuj wm-a"/><path class="b83hx2bbd wm-s"/></g>`,
		"fallback": "withicons:bell-off-blueprint",
	});
}

export default Component;
