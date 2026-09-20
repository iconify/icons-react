import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/o/oz-qin.css';
import '../../css/e/eiiwcz.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c oz-qin"/><path class="a0m25c eiiwcz"/>`,
		"fallback": "line-md:double-arrow-horizontal",
	});
}

export default Component;
