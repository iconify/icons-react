import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmetjnbqy.css';
import '../../css/b/b41vhnblw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hmetjnbqy"/><path class="b41vhnblw"/></g>`,
		"fallback": "hugeicons:computer-arrow-down",
	});
}

export default Component;
