import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qov099bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qov099bwy"/>`,
		"fallback": "tabler:bell-plus",
	});
}

export default Component;
