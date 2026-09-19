import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/otkax0g8g.css';
import '../../css/b/b3jw1wbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="otkax0g8g"/><path class="b3jw1wbpk"/></g>`,
		"fallback": "hugeicons:ai-transcribe-audio",
	});
}

export default Component;
