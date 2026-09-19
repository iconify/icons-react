import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbyr_s4ar.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbyr_s4ar"/>`,
		"fallback": "ant-design:bank-fill",
	});
}

export default Component;
