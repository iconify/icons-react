import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kirqiqf8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kirqiqf8a"/>`,
		"fallback": "mingcute:clock-fill",
	});
}

export default Component;
