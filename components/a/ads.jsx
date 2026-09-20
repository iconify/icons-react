import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ieuuixy1o.css';
import '../../css/m/m1si3hbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ieuuixy1o"/><path class="m1si3hbyk"/>`,
		"fallback": "token:ads",
	});
}

export default Component;
