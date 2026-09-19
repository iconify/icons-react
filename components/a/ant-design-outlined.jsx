import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt25qkitr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt25qkitr"/>`,
		"fallback": "ant-design:ant-design-outlined",
	});
}

export default Component;
