import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tos4f_s-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tos4f_s-y"/>`,
		"fallback": "streamline-sharp:arrow-triangle-loop",
	});
}

export default Component;
