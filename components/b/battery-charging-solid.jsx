import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e9johlpux.css';
import '../../css/m/mkibynbaa.css';
import '../../css/l/lf4251k5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="e9johlpux"/><path class="mkibynbaa wm-a"/><path class="lf4251k5i wm-s"/></g>`,
		"fallback": "withicons:battery-charging-solid",
	});
}

export default Component;
