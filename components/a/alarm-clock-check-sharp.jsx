import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov1f3v2im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov1f3v2im"/>`,
		"fallback": "keyline-icons:alarm-clock-check-sharp",
	});
}

export default Component;
