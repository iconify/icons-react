import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3v8b3bbr.css';
import '../../css/o/onhszcbsu.css';
import '../../css/l/lwca995sk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3v8b3bbr"/><path class="onhszcbsu"/><path class="lwca995sk"/>`,
		"fallback": "token:brn",
	});
}

export default Component;
