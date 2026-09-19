import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t0qd5cgzd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t0qd5cgzd"/>`,
		"fallback": "ant-design:ant-cloud-outlined",
	});
}

export default Component;
