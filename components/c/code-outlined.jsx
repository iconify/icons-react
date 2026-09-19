import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o20yp87lc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o20yp87lc"/>`,
		"fallback": "ant-design:code-outlined",
	});
}

export default Component;
