import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvezwc7ew.css';
import '../../css/u/uemg9fbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvezwc7ew"/><path class="uemg9fbqk"/>`,
		"fallback": "boxicons:database-filled",
	});
}

export default Component;
