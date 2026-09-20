import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l80-m056n.css';
import '../../css/y/y_yfhhb9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="l80-m056n"/><path class="y_yfhhb9e"/></g>`,
		"fallback": "streamline-logos:alipay-logo",
	});
}

export default Component;
