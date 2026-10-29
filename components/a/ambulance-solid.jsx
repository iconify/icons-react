import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1xxsfbbv.css';
import '../../css/g/g4m0u7kux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="k1xxsfbbv"/><path class="g4m0u7kux wm-a"/></g>`,
		"fallback": "withicons:ambulance-solid",
	});
}

export default Component;
