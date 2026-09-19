import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zz8siacxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zz8siacxm"/>`,
		"fallback": "fe:check",
	});
}

export default Component;
