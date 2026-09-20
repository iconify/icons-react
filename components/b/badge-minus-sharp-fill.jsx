import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3htt1wgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3htt1wgm"/>`,
		"fallback": "keyline-icons:badge-minus-sharp-fill",
	});
}

export default Component;
