import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/b1skjm25j.css';
import '../../css/s/sug05pb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="b1skjm25j"/><path class="sug05pb5e"/></g>`,
		"fallback": "hugeicons:bubble-chat-spark-01",
	});
}

export default Component;
