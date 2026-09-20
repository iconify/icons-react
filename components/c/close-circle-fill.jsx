import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twd5uacrl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twd5uacrl"/>`,
		"fallback": "ri:close-circle-fill",
	});
}

export default Component;
