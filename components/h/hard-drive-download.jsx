import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yo8cmopuc.css';
import '../../css/m/m3_ch9jcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yo8cmopuc"/><path class="m3_ch9jcv"/></g>`,
		"fallback": "hugeicons:hard-drive-download",
	});
}

export default Component;
