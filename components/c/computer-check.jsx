import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmetjnbqy.css';
import '../../css/s/s3vk9m20y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hmetjnbqy"/><path class="s3vk9m20y"/></g>`,
		"fallback": "hugeicons:computer-check",
	});
}

export default Component;
