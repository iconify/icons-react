import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/up4gwh-bs.css';
import '../../css/u/uv693bcmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="up4gwh-bs"/><path class="uv693bcmb"/>`,
		"fallback": "uim:battery-bolt",
	});
}

export default Component;
