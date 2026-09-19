import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0zxo92_i.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0zxo92_i"/>`,
		"fallback": "ant-design:contacts-fill",
	});
}

export default Component;
