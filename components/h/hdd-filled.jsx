import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly_u-9biw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly_u-9biw"/>`,
		"fallback": "ant-design:hdd-filled",
	});
}

export default Component;
