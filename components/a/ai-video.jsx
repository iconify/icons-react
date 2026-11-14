import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c5m-dcckw.css';
import '../../css/v/vcjs8gbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c5m-dcckw"/><path class="vcjs8gbll"/></g>`,
		"fallback": "hugeicons:ai-video",
	});
}

export default Component;
