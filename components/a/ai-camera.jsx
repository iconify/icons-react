import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zr-nrydbd.css';
import '../../css/n/na9ggt8-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zr-nrydbd"/><path class="na9ggt8-k"/></g>`,
		"fallback": "hugeicons:ai-camera",
	});
}

export default Component;
