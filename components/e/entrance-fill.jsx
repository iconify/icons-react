import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nb60v9_9g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nb60v9_9g"/>`,
		"fallback": "mingcute:entrance-fill",
	});
}

export default Component;
