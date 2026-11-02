import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv_yzke7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv_yzke7x"/>`,
		"fallback": "mingcute:circle-slash-2-line",
	});
}

export default Component;
