import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvm0pk2cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvm0pk2cj"/>`,
		"fallback": "uil:angle-left-b",
	});
}

export default Component;
