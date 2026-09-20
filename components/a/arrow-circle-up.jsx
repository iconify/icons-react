import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxsoy8glv.css';
import '../../css/q/q098jibdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxsoy8glv"/><path class="q098jibdz"/>`,
		"fallback": "pixel:arrow-circle-up",
	});
}

export default Component;
