import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp-_rmb2n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp-_rmb2n"/>`,
		"fallback": "ant-design:field-number-outlined",
	});
}

export default Component;
