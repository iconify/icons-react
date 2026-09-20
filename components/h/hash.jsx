import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qqb3yx5_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qqb3yx5_l"/>`,
		"fallback": "mynaui:hash",
	});
}

export default Component;
