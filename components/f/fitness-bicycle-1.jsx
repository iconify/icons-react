import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gtck4ysrt.css';
import '../../css/e/ewgdigbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gtck4ysrt"/><path class="ewgdigbjh"/></g>`,
		"fallback": "streamline-ultimate:fitness-bicycle-1",
	});
}

export default Component;
