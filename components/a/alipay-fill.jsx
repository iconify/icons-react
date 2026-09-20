import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwiio5fxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwiio5fxw"/>`,
		"fallback": "ri:alipay-fill",
	});
}

export default Component;
