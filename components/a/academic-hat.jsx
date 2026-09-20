import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9yvr5svp.css';
import '../../css/z/zhqm21bqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k9yvr5svp"/><path class="zhqm21bqp"/></g>`,
		"fallback": "mynaui:academic-hat",
	});
}

export default Component;
