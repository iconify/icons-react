import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqnd8rbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqnd8rbza"/>`,
		"fallback": "mdi:cursor-default",
	});
}

export default Component;
