import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujtm8gbho.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujtm8gbho"/>`,
		"fallback": "ant-design:function",
	});
}

export default Component;
