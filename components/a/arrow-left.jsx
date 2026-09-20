import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/p/pkg6ma.css';
import '../../css/e/ewwyqq.css';
import '../../css/s/so-from-20.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c pkg6ma"/><path class="a0m25c ewwyqq"/>`,
		"fallback": "line-md:arrow-left",
	});
}

export default Component;
