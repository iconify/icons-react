import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awhk9db1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awhk9db1l"/>`,
		"fallback": "gg:corner-double-left-down",
	});
}

export default Component;
