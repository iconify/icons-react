import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqmh9p0fn.css';
import '../../css/v/vv7d6sb3h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqmh9p0fn"/><path class="vv7d6sb3h"/>`,
		"fallback": "ant-design:bank-twotone",
	});
}

export default Component;
