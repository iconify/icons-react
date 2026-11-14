import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/twjtbteoq.css';
import '../../css/t/ta-7qab3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="twjtbteoq"/><path class="ta-7qab3u"/></g>`,
		"fallback": "hugeicons:ai-user",
	});
}

export default Component;
