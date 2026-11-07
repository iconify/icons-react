import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qz625mb3h.css';
import '../../css/v/vfll34fsr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/m/m2-on0bla.css';
import '../../css/v/vipv0t5kp.css';
import '../../css/m/mswbmfbld.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qz625mb3h"/><path class="vfll34fsr"/><g class="xtpeb-edw"><path class="m2-on0bla"/><path class="vipv0t5kp"/><path class="mswbmfbld"/></g>`,
		"fallback": "solar:chevrons-left-right-ellipsis-bold-duotone",
	});
}

export default Component;
