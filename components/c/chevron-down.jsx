import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpwd9l.css';
import '../../css/s/so-from-12.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpwd9l"/>`,
		"fallback": "line-md:chevron-down",
	});
}

export default Component;
