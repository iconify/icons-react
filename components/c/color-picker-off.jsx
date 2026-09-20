import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndu43bc7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndu43bc7v"/>`,
		"fallback": "tabler:color-picker-off",
	});
}

export default Component;
