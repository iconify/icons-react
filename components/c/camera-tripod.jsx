import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nl8uk_bxx.css';
import '../../css/m/mt_wnwdig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nl8uk_bxx"/><path class="mt_wnwdig"/></g>`,
		"fallback": "streamline-ultimate:camera-tripod",
	});
}

export default Component;
