import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jim1fm-xr.css';
import '../../css/q/quffauepo.css';
import '../../css/o/od3qi_b-a.css';
import '../../css/t/t_zbp4u6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jim1fm-xr"/><path class="quffauepo"/><path class="od3qi_b-a"/><path class="t_zbp4u6d"/></g>`,
		"fallback": "lets-icons:arhive-plane",
	});
}

export default Component;
