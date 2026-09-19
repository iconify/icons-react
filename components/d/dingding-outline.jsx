import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw41954fp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw41954fp"/>`,
		"fallback": "ant-design:dingding-outline",
	});
}

export default Component;
