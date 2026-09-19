import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_mv1bd4n.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_mv1bd4n"/>`,
		"fallback": "ant-design:alipay-square-filled",
	});
}

export default Component;
