import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xdadzovzv.css';
import '../../css/z/zebsf4wkp.css';
import '../../css/d/dfl2z7ovp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xdadzovzv"/><path class="zebsf4wkp"/><path class="dfl2z7ovp"/></g>`,
		"fallback": "hugeicons:bubble-chat-notification",
	});
}

export default Component;
