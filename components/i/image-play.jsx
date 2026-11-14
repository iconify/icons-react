import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kgo6dpbjf.css';
import '../../css/s/sx6hnebpa.css';
import '../../css/j/jrfe0yykh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kgo6dpbjf"/><path class="sx6hnebpa"/><path class="jrfe0yykh"/></g>`,
		"fallback": "hugeicons:image-play",
	});
}

export default Component;
