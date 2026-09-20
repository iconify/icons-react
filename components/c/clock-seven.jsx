import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/too40e6yy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="too40e6yy"/>`,
		"fallback": "uil:clock-seven",
	});
}

export default Component;
