import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsrz7pbkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsrz7pbkv"/>`,
		"fallback": "tabler:adjustments-exclamation",
	});
}

export default Component;
