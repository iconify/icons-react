import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/q/q9f3-p.css';
import '../../css/z/zaa6zm.css';
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
		"content": `<path class="a0m25c q9f3-p"/><path class="a0m25c zaa6zm"/>`,
		"fallback": "line-md:double-arrow-vertical",
	});
}

export default Component;
