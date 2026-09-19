import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll22o1baf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll22o1baf"/>`,
		"fallback": "ant-design:alipay-circle-filled",
	});
}

export default Component;
