import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zh88yjbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zh88yjbtg"/>`,
		"fallback": "noviair-light:arrow-big-right",
	});
}

export default Component;
