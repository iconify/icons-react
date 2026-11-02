import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp4dl1b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp4dl1b8y"/>`,
		"fallback": "mingcute:heart-plus-fill",
	});
}

export default Component;
