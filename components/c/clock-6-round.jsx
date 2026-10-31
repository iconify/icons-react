import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mii7rxkxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mii7rxkxd"/>`,
		"fallback": "coolicons:clock-6-round",
	});
}

export default Component;
