import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ileo9db7a.css';
import '../../css/i/i3l80h-5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ileo9db7a"/><path class="i3l80h-5o"/>`,
		"fallback": "solar:archive-bold-duotone",
	});
}

export default Component;
