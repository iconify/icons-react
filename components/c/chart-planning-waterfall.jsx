import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3hzlzbfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3hzlzbfx"/>`,
		"fallback": "carbon:chart-planning-waterfall",
	});
}

export default Component;
